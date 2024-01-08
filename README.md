# Vite + React + Typescript + prettier + eslint 프로젝트 생성

본 프로젝트는 recoil 연습용 프로젝트 입니다 .  
airbnb eslint를 사용하였습니다.

**.eslint.cjs**

```cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {},
};
```

**.prettierrc**

```js

{
  "arrowParens": "always",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "always",
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false
}

```

**tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [".eslintrc.cjs", "src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**package.json**

```json
{
  "name": "pra",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "format": "prettier --write --cache .",
    "lint": "eslint src/**/*.{ts,tsx} --fix"
  },
  "dependencies": {
    "@types/react-router-dom": "^5.3.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.1",
    "recoil": "^0.7.7",
    "tailwind-styled-components": "^2.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.4.0",
    "@typescript-eslint/parser": "^6.17.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "8.2.0",
    "eslint-config-airbnb": "19.0.4",
    "eslint-config-airbnb-typescript": "^17.1.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-config-standard-with-typescript": "^43.0.0",
    "eslint-import-resolver-typescript": "^3.6.1",
    "eslint-plugin-import": "2.25.3",
    "eslint-plugin-jsx-a11y": "6.5.1",
    "eslint-plugin-n": "^15.0.0 || ^16.0.0 ",
    "eslint-plugin-prettier": "^5.1.2",
    "eslint-plugin-promise": "^6.0.0",
    "eslint-plugin-react": "7.28.0",
    "eslint-plugin-react-hooks": "4.3.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "prettier": "^3.1.1",
    "typescript": "*",
    "vite": "^5.0.8"
  }
}
```
