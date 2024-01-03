# React + TypeScript + Vite

project-root/\
├── src/\
│ ├── components/\
│ │ ├── Table/\
│ │ │ ├── Table.tsx\
│ │ │ └── TableItem.tsx\
│ │ ├── Modal/\
│ │ │ ├── Modal.tsx\
│ │ │ └── Form.tsx\
│ │ └── ...\
│ ├── pages/\
│ │ ├── HomePage/\
│ │ │ ├── HomePage.tsx\
│ │ │ └── HomePage.css\
│ │ ├── TablePage/\
│ │ │ ├── TablePage.tsx\
│ │ │ └── TableContainer.tsx\
│ │ └── ...\
│ ├── api/\
│ │ ├── api.tsx\
│ │ └── endpoints.tsx\
│ ├── utils/\
│ │ ├── helpers.tsx\
│ │ └── ...\
│ ├── store/\
│ │ ├── actions/\
│ │ │ ├── tableActions.tsx\
│ │ │ └── ...\
│ │ ├── reducers/\
│ │ │ ├── tableReducer.tsx\
│ │ │ └── ...\
│ │ ├── store.tsx\
│ │ └── ...\
│ ├── styles/\
│ │ ├── tailwind.css\
│ │ └── ...\
│ ├── App.tsx\
│ ├── index.tsx\
│ └── index.css\
├── public/\
│ ├── index.html\
│ └── ...\
├── .gitignore\
├── package.tsxon\
└── README.md\

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
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.tson", "./tsconfig.node.tson"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/tsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/tsx-runtime` to the `extends` list
