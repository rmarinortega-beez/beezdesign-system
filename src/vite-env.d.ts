/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BEEZ_ID_URL?: string
  readonly VITE_DESIGN_APP_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
