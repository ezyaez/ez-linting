# `eslint-config-ez`

Global ESLint configuration for Nuxt.js + TypeScript projects.

## Getting Started

### Install Package

```
npm i -D @ezyaez/eslint-config-ez
```

### Library Usage

This library contains some of most common rules for eslint for NuxtJS in integration with TypeScript. It extends `@nuxtjs`, use plugins as `@typescript-eslint` and parser as `@typescript-eslint/parser`. It recommended to use this library as a base for your own configuration in projects.

ESLint can be configured in many ways e.g (.eslintrc.{js,yml,json} files.)

#### To extend this library

```
extends: ['@ezyaez/eslint-config-ez']
```

### [Library Rules](https://github.com/ezyaez/ez-linting/blob/master/packages/eslint-config-ez/lib/eslint-config-ez.js)

### Building

Run `nx build eslint-config-ez` to build the library.

### Linting

Run `nx lint eslint-config-ez` to lint the library.

## Running unit tests

Run `nx test eslint-config-ez` to execute the unit tests via [Jest](https://jestjs.io).

### [View Change Log](https://github.com/ezyaez/ez-linting/blob/master/CHANGELOG.md)