// <reference types="vite/client" />

type ImportMetaEnv = Record<string, string | undefined>

interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare module "*.svg" {
  const content: string
  export default content
}

// declarations.d.ts
declare module "*.png" {
  const value: string
  export default value
}

declare module "*.css"

