-- BeezID seed for Beez Design System / Design Center.
-- Safe to run multiple times. Run this in the BeezID database, not in the Design Center project.
-- If rmarinortega@outlook.es does not exist in auth.users yet, the app and permissions are still created
-- and a notice is raised. Re-run after creating the user to assign access.

do $$
declare
  target_app_id uuid;
  target_org_id uuid;
  target_member_id uuid;
  owner_role_id uuid;
  target_user_id uuid;
  permission_key text;
  design_permissions text[] := array[
    'design-system.access',
    'design-system.view',
    'design-system.components.read',
    'design-system.tokens.read',
    'design-system.themes.read',
    'design-system.manage'
  ];
begin
  insert into public.applications (slug, name, description, homepage_url, is_active)
  values (
    'design-system',
    'Beez Design System',
    'Design Center, tokens, themes and UI components for Beez applications.',
    'https://design.beezprojects.com',
    true
  )
  on conflict (slug) do update
  set name = excluded.name,
      description = excluded.description,
      homepage_url = excluded.homepage_url,
      is_active = true,
      updated_at = now()
  returning id into target_app_id;

  foreach permission_key in array design_permissions loop
    insert into public.permissions (key, description, application_id)
    values (
      permission_key,
      'Design System permission: ' || permission_key,
      target_app_id
    )
    on conflict (key) do update
    set description = excluded.description,
        application_id = excluded.application_id,
        updated_at = now();
  end loop;

  insert into public.roles (slug, name, description, organization_id, is_system)
  values ('owner', 'Owner', 'Full access owner role for Beez applications.', null, true)
  on conflict (slug) where organization_id is null do update
  set name = excluded.name,
      description = excluded.description,
      is_system = true,
      updated_at = now()
  returning id into owner_role_id;

  insert into public.role_permissions (role_id, permission_id)
  select owner_role_id, id
  from public.permissions
  where key = any(design_permissions)
  on conflict do nothing;

  insert into public.organizations (slug, name, metadata)
  values ('beezprojects', 'BeezProjects', jsonb_build_object('kind', 'company'))
  on conflict (slug) do update
  set name = excluded.name,
      metadata = public.organizations.metadata || excluded.metadata,
      updated_at = now()
  returning id into target_org_id;

  insert into public.organization_app_access (organization_id, application_id, enabled)
  values (target_org_id, target_app_id, true)
  on conflict (organization_id, application_id) do update
  set enabled = true,
      updated_at = now();

  select id into target_user_id
  from auth.users
  where lower(email) = lower('rmarinortega@outlook.es')
  order by created_at asc
  limit 1;

  if target_user_id is null then
    raise notice 'User rmarinortega@outlook.es was not found in auth.users. Re-run this seed after creating the user.';
    return;
  end if;

  update public.organizations
  set created_by = coalesce(created_by, target_user_id),
      updated_at = now()
  where id = target_org_id;

  insert into public.organization_members (organization_id, user_id, status)
  values (target_org_id, target_user_id, 'active')
  on conflict (organization_id, user_id) do update
  set status = 'active',
      updated_at = now()
  returning id into target_member_id;

  insert into public.organization_member_roles (organization_member_id, role_id)
  values (target_member_id, owner_role_id)
  on conflict do nothing;

  insert into public.user_app_access (user_id, application_id, enabled)
  values (target_user_id, target_app_id, true)
  on conflict (user_id, application_id) do update
  set enabled = true,
      updated_at = now();

  foreach permission_key in array design_permissions loop
    insert into public.user_permissions (user_id, permission_id, organization_id, enabled)
    select target_user_id, permission.id, target_org_id, true
    from public.permissions permission
    where permission.key = permission_key
    on conflict (user_id, permission_id, organization_id) do update
    set enabled = true,
        updated_at = now();
  end loop;

  insert into public.user_active_context (user_id, active_organization_id, active_application_id)
  values (target_user_id, target_org_id, target_app_id)
  on conflict (user_id) do update
  set active_organization_id = excluded.active_organization_id,
      active_application_id = excluded.active_application_id,
      updated_at = now();
end $$;
