# `eslint-config-yc`

Global ESLint configuration for Nuxt.js + TypeScript (YC)projects.

## Getting Started

### Install Package

```
npm i -D @ezyaez/eslint-config-yc
```

### Library Usage

This library contains some of most common rules for eslint for NuxtJS in integration with TypeScript. It extends `plugin:@typescript-eslint/recommended` and `@nuxtjs/eslint-config-typescript`. It recommended to use this library as a base for your own configuration in projects.

ESLint can be configured in many ways e.g (.eslintrc.{js,yml,json} files.)

#### To extend this library

```
extends: ['@ezyaez/eslint-config-yc']
```

### Building

Run `nx build eslint-config-yc` to build the library.

### Linting

Run `nx lint eslint-config-yc` to lint the library.

### Running unit tests

Run `nx test eslint-config-yc` to execute the unit tests via [Jest](https://jestjs.io).

### Description

**"extends": ['@ezyaez/eslint-config-yc']** tells ESLint that your config extends shared **@ezyaez/eslint-config-yc** configuration. This shared configuration also have its own extends packages **@nuxtjs/eslint-config-typescript** and **plugin:@typescript-eslint/recommended**, which will also apply into the .eslintrc configuration. So there is no need to extends again these packages in your own .eslintrc.

This library provides lint rules for TypeScript codebases.

You can override same rules as you could with @nuxtjs/eslint-config but also TypeScript rules under the rules section of .eslintrc configuration file. You can find the list of supported TypeScript rules [here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules).

### Example

@typescript-eslint/no-explicit-any **Disallow usage of the any type**.

**Override default settings**

```
rules: {
@typescript-eslint/no-explicit-any: off,
}

```

This rule doesn't allow any types to be defined default, You can override rule on project level by error/off values as required.
[More Info](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md)

**Note**: Monthly update and audit check of this package required. Make entry into Change.md file, if any update or changes.

### [View Change Log](https://github.com/ezyaez/ez-linting/blob/master/CHANGELOG.md)