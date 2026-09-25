{
  "$schema": "https://json.schemastore.org/tsconfig",

  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",

    /* Language */
    "target": "ES2023",
    "lib": [
      "ES2023",
      "DOM",
      "DOM.Iterable",
      "WebWorker"
    ],
    "jsx": "react-jsx",

    /* Module */
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "moduleDetection": "force",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,

    /* Paths */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@pages/*": ["src/pages/*"],
      "@hooks/*": ["src/hooks/*"],
      "@utils/*": ["src/utils/*"],
      "@services/*": ["src/services/*"],
      "@assets/*": ["src/assets/*"],
      "@styles/*": ["src/styles/*"],
      "@config/*": ["src/config/*"],
      "@types/*": ["src/types/*"],
      "@web4/*": ["src/web4/*"],
      "@lmlm/*": ["src/lmlm/*"],
      "@qubuhub/*": ["src/qubuhub/*"]
    },

    /* Emit */
    "noEmit": true,
    "sourceMap": true,

    /* JavaScript */
    "allowJs": false,
    "checkJs": false,

    /* Interop */
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    /* Strictness */
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,

    /* Performance */
    "skipLibCheck": true,
    "isolatedModules": true,
    "useDefineForClassFields": true,

    /* Types */
    "types": [
      "vite/client",
      "node"
    ]
  },

  "include": [
    "src",
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.json",
    "src/**/*.d.ts"
  ],

  "exclude": [
    "dist",
    "build",
    "coverage",
    "node_modules",
    "**/*.spec.ts",
    "**/*.test.ts"
  ]
}
