# `eslint-config-vue`

Global ESLint configuration for Vue.js (YC-Login)projects.

## Getting Started

### Install Package

```
npm i -D @ezyaez/eslint-config-vue
```

### Library Usage

This library contains some of most common rules for eslint for VueJS in integration. It extends `eslint:recommended`,`plugin:vue/recommended` and use plugins as `vue`. It recommended to use this library as a base for your own configuration in projects.

ESLint can be configured in many ways e.g (.eslintrc.{js,yml,json} files.)

#### To extend this library

```
extends: ['@ezyaez/eslint-config-vue']
```

### [Library Rules](https://github.com/ezyaez/ez-linting/blob/vaishali/yc-login/lint/packages/eslint-config-vue/lib/eslint-config-vue.ts)

### Building

Run `nx build eslint-config-vue` to build the library.

### Linting

Run `nx lint eslint-config-vue` to lint the library.

## Running unit tests

Run `nx test eslint-config-vue` to execute the unit tests via [Jest](https://jestjs.io).

### [View Change Log](https://github.com/ezyaez/ez-linting/blob/master/CHANGELOG.md)