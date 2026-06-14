# Beez Design System

Design Center inicial para BeezProjects y base publicable de la libreria React reutilizable `@beez-projects/ui`.

## Instalar

Cuando el paquete este publicado:

```bash
npm install @beez-projects/ui
```

En desarrollo local de este repositorio:

```bash
npm install
```

## Arrancar

```bash
npm run dev
```

Para construir la app demo desplegable, el mismo comando que debe usar Vercel:

```bash
npm run build
```

Para levantar la demo visual del Design Center:

```bash
npm run dev
```

Para previsualizar la demo con build estatica:

```bash
npm run preview
```

Para construir la libreria publicable:

```bash
npm run build:lib
```

## Acceso del Design Center

El Design Center queda protegido por BeezID. La ruta publica `/` muestra una entrada minima con acciones de login y registro. El Design Center real vive en `/app` y `/design-center`.

```bash
VITE_BEEZ_ID_URL=https://id.beezprojects.com
VITE_DESIGN_APP_URL=https://design.beezprojects.com
```

Rutas de acceso:

- `/`: landing publica de entrada.
- `/auth/callback`: callback de BeezID.
- `/app`: Design Center protegido.
- `/design-center`: alias protegido del Design Center.
- `/not-authorized`: sesion valida sin permisos suficientes.

Las URLs hacia BeezID se construyen con:

- `app=design-system`
- `origin=${VITE_DESIGN_APP_URL}`
- `redirect_uri=${VITE_DESIGN_APP_URL}/auth/callback`

El SDK `@beez-projects/beezid` valida la sesion y el contexto de acceso. Para entrar se exige acceso a la app `design-system` y el permiso `design-system.access`.

## Cambiar de tema

La app usa `data-theme` sobre el documento y variables CSS. Temas disponibles:

- `beez`
- `gravity`
- `bmmanager`
- `flow`
- `beezid`

Desde React se usa `ThemeProvider` y `useBeezTheme`. En CSS, los temas viven en `src/styles/themes.css`.

## Uso de componentes desde otra app React

Una app como Gravity, Flow, BMManager o BeezID debe importar primero los estilos publicos y luego los componentes:

```tsx
import '@beez-projects/ui/styles.css';
import { BeezButton, BeezCard, BeezThemeProvider } from '@beez-projects/ui';

export function GravityPanel() {
  return (
    <BeezThemeProvider theme="gravity">
      <BeezCard>
        <BeezButton variant="primary">Empezar</BeezButton>
      </BeezCard>
    </BeezThemeProvider>
  );
}
```

Los componentes publicos se exportan desde `@beez-projects/ui`. Los estilos se exportan desde `@beez-projects/ui/styles.css`.

Temas soportados:

```tsx
<BeezThemeProvider theme="beez">
<BeezThemeProvider theme="gravity">
<BeezThemeProvider theme="bmmanager">
<BeezThemeProvider theme="flow">
<BeezThemeProvider theme="beezid">
```

`BeezThemeProvider` aplica `data-theme` sobre su contenedor raiz, de modo que los tokens CSS quedan acotados a la parte de la app envuelta por el provider.

## Estilos importables

La entrada de estilos preparada para publicacion es:

```tsx
import '@beez-projects/ui/styles.css';
```

En codigo fuente corresponde a `src/styles/styles.css`, que importa:

- `tokens.css`
- `themes.css`
- `global.css`
- `utilities.css`

En el paquete compilado se publica como:

```text
dist/styles.css
```

## Build de libreria

```bash
npm run build:lib
```

Genera:

- `dist/index.js` para ESM.
- `dist/index.cjs` para CommonJS.
- `dist/index.d.ts` y declaraciones asociadas.
- `dist/styles.css` para consumo explicito de estilos.

`react` y `react-dom` son `peerDependencies`. `lucide-react` queda como dependencia del paquete porque los componentes usan iconografia lineal.

## Anadir o modificar un tema

1. Anadir un bloque en `src/styles/themes.css`:

```css
[data-theme='newapp'] {
  --beez-primary: #14b8a6;
  --beez-primary-hover: #2dd4bf;
  --beez-primary-soft: rgba(20, 184, 166, 0.1);
  --beez-accent: #38bdf8;
  --beez-accent-soft: rgba(56, 189, 248, 0.08);
  --beez-focus: #5eead4;
  --beez-glow: rgba(20, 184, 166, 0.1);
}
```

2. Anadir metadata en `src/theme/themes.ts`:

```ts
{
  id: 'newapp',
  name: 'New App',
  description: 'Theme description.',
  primary: '#14B8A6',
  accent: '#38BDF8',
  useCase: 'Product context and operational signals.',
}
```

3. Usarlo en React:

```tsx
<BeezThemeProvider theme="newapp">
  <App />
</BeezThemeProvider>
```

## Tokens que una app puede cambiar

- `--beez-primary`
- `--beez-primary-hover`
- `--beez-primary-soft`
- `--beez-accent`
- `--beez-accent-soft`
- `--beez-focus`
- `--beez-glow`

## Tokens que una app no deberia cambiar

Salvo decision global de marca, una app no deberia sobrescribir:

- `--beez-bg`
- `--beez-surface`
- `--beez-text`
- `--beez-radius-*`
- `--beez-border`
- `--beez-shadow-*`

## Crear un componente nuevo

1. Crear el componente en `src/components/ui`.
2. Tipar props con TypeScript y mantenerlo funcional, sin logica de negocio.
3. Usar tokens CSS (`--beez-*`) en vez de colores directos.
4. Cubrir hover, focus visible, disabled y estados semanticos cuando aplique.
5. Exportarlo desde `src/index.ts`.
6. Anadir una demo visual en la pagina correspondiente.

## Reglas visuales Beez

- Beez debe sentirse como panel de control de un ecosistema tecnologico: modular, colaborativo, cloud-first y conectado.
- Honey/amber es marca base, jerarquia principal y senal de identidad. No se usa como relleno decorativo masivo.
- Los acentos de app se usan para contexto operativo: seleccion activa, rutas de producto, metricas clave y foco local.
- La UI debe priorizar borders finos, contraste por capas y densidad controlada antes que sombras o gradientes.
- Los modulos usan header pequeno, label uppercase, metadata, contenido compacto e indicador/acento sutil.
- Evitar estetica infantil, neon agresivo, cards tipo burbuja, Bootstrap, Angular Material, PrimeNG o plantillas SaaS genericas.

## Reglas de radius

- `--beez-radius-sm`: 4px para badges, swatches y elementos pequenos.
- `--beez-radius-md`: 8px para botones, inputs, tiles y controles.
- `--beez-radius-lg`: 12px para cards y modulos principales.
- `--beez-radius-xl`: 16px como maximo para contenedores especiales.
- Evitar radius 24px/32px y formas pill salvo que haya una razon funcional clara.

## Reglas de densidad

- Cards compactas: padding base cercano a 14px.
- Botones compactos: `sm` 30px, `md` 36px, `lg` 42px.
- Headers de pagina sobrios, con escala de dashboard, no de landing.
- Usar grids compactos y patrones numerados `01/02/03` para arquitectura, capas y flujos.

## Reglas de cards

- Una card representa un modulo de plataforma, no una tarjeta decorativa.
- Preferir `border: 1px` y fondo oscuro sobre glow o sombra fuerte.
- Hover por `border-color` y contraste de superficie; evitar escala o movimiento grande.
- Usar etiquetas tipo `IDENTITY LAYER`, `EVENT LAYER`, `AUTOMATION LAYER`, `SPORT & HEALTH`.
- Separar patrones: Product card, Layer card, Architecture step, Event flow y Core module.

## Seed de BeezID para esta app

El SQL idempotente esta en:

```text
docs/sql/design-system-access-seed.sql
```

Debe ejecutarse en la base de datos de BeezID. Registra:

- app `design-system`;
- permisos `design-system.access`, `design-system.view`, `design-system.components.read`, `design-system.tokens.read`, `design-system.themes.read`, `design-system.manage`;
- acceso de la organizacion `BeezProjects`;
- rol `owner`;
- acceso y permisos directos para `rmarinortega@outlook.es` si el usuario ya existe en `auth.users`.

Si el usuario no existe, el seed no falla de forma destructiva: crea app/permisos y emite un `notice`. Ejecutalo de nuevo tras crear el usuario en BeezID.

## Futuro paquete @beez-projects/ui

La estructura ya separa `components/ui`, `theme` y `styles`. Antes de publicar:

- revisar `src/index.ts` para exportar cualquier componente nuevo;
- ejecutar `npm run build:lib`;
- ejecutar `npm pack` y probar el `.tgz` en una app consumidora;
- mantener el Design Center como documentacion/demo interna;
- anadir tests unitarios y visual regression antes de consumo amplio.

## Publicar en GitHub Packages

No publicar desde este repo hasta confirmar version y permisos. Cuando toque:

1. Asegurar que `package.json` tiene:

```json
{
  "name": "@beez-projects/ui",
  "version": "0.1.0",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com",
    "access": "restricted"
  }
}
```

2. Crear o revisar `.npmrc` para el scope:

```text
@beez-projects:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

3. Compilar y empaquetar:

```bash
npm run build:lib
npm pack
```

Vercel debe usar:

```bash
npm run build
```

Ese comando genera la app demo en `dist`. No usar `build:lib` para despliegues de Vercel.

4. Publicar cuando este aprobado:

```bash
npm publish
```
