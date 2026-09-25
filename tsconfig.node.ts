{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "types": ["node"]
  },
  "include": [
    "vite.config.ts",
    "scripts/**/*.ts"
  ]
}
