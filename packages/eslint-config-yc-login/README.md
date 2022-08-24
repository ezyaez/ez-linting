# `eslint-config-yc-login`

Global ESLint configuration for Vue.js (YC-Login)projects.

## Getting Started

### Install Package

```
npm i -D @ezyaez/eslint-config-yc-login
```

### Library Usage

This library contains some of most common rules for eslint for VueJS in integration. It extends `eslint:recommended`,`plugin:vue/recommended` and use plugins as `vue`. It recommended to use this library as a base for your own configuration in projects.

ESLint can be configured in many ways e.g (.eslintrc.{js,yml,json} files.)

#### To extend this library

```
extends: ['@ezyaez/eslint-config-yc-login']
```

### [Library Rules](https://github.com/ezyaez/ez-linting/blob/vaishali/yc-login/lint/packages/eslint-config-yc-login/lib/eslint-config-yc-login.ts)

### Building

Run `nx build eslint-config-yc-login` to build the library.

### Linting

Run `nx lint eslint-config-yc-login` to lint the library.

## Running unit tests

Run `nx test eslint-config-yc-login` to execute the unit tests via [Jest](https://jestjs.io).

### [View Change Log](https://github.com/ezyaez/ez-linting/blob/master/CHANGELOG.md)