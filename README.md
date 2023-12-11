# React + TypeScript + Vite


project-root/
├── src/
│   ├── components/
│   │   ├── Table/
│   │   │   ├── Table.ts
│   │   │   └── TableItem.ts
│   │   ├── Modal/
│   │   │   ├── Modal.ts
│   │   │   └── Form.ts
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage/
│   │   │   ├── HomePage.ts
│   │   │   └── HomePage.css
│   │   ├── TablePage/
│   │   │   ├── TablePage.ts
│   │   │   └── TableContainer.ts
│   │   └── ...
│   ├── api/
│   │   ├── api.ts
│   │   └── endpoints.ts
│   ├── utils/
│   │   ├── helpers.ts
│   │   └── ...
│   ├── styles/
│   │   ├── tailwind.css
│   │   └── ...
│   ├── App.ts
│   ├── index.ts
│   └── index.css
├── public/
│   ├── index.html
│   └── ...
├── .gitignore
├── package.json
└── README.md

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitets/plugin-react](https://github.com/vitets/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babelts.io/) for Fast Refresh
- [@vitets/plugin-react-swc](https://github.com/vitets/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```ts
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.tson', './tsconfig.node.tson'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/tsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/tsx-runtime` to the `extends` list
