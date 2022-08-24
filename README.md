# ez-linting  [![Publish Package to NPM](https://github.com/ezyaez/ez-linting/actions/workflows/publish-packages.yaml/badge.svg)](https://github.com/ezyaez/ez-linting/actions/workflows/publish-packages.yaml)

### Check Package Specific Doc

- [ESLint](https://github.com/ezyaez/ez-linting/tree/master/packages/eslint-config-ez#readme)
- [StyleLint](https://github.com/ezyaez/ez-linting/tree/master/packages/stylelint-config-ez#readme)
- [Eslint-Vue](https://github.com/ezyaez/ez-linting/blob/vaishali/yc-login/lint/packages/eslint-config-yc-login/README.md)
- [Eslint-typescript](https://github.com/ezyaez/ez-linting/blob/master/packages/eslint-config-yc/README.md)

This project was generated using [Nx](https://nx.dev), **Smart, Fast and Extensible Build System.**

### Creating Workspace with Core CLI and Install js Deps

```
npx create-nx-workspace@latest
npm i -D @nrwl/js
```

### Generate a library

```
nx g @nrwl/js:lib eslint-config-ez --publishable --importPath="@ezyaez/eslint-config-ez"
nx g @nrwl/js:lib eslint-config-yc --publishable --importPath="@ezyaez/eslint-config-yc"
nx g @nrwl/js:lib eslint-config-yc-login --publishable --importPath="@ezyaez/eslint-config-yc-login"
nx g @nrwl/js:lib stylelint-config-ez --publishable --importPath="@ezyaez/stylelint-config-ez"
```

### Publish the packages

```
nx publish PKG_NAME --ver=<required-version> --tag=[custom-tag]
```

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

#### [View ChangeLog](https://github.com/ezyaez/ez-linting/blob/master/CHANGELOG.md)
