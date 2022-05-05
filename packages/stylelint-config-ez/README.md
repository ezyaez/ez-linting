# `stylelint-config-ez`

Global Stylelint configuration for SCSS projects.

## Getting Started

### Install Package

```
npm i -D @ezyaez/stylelint-config-ez
```

### Library Usage

This library contains some of the most common rules for stylelint. It is recommended to use this library as a base for your own configuration in projects.
It extends `stylelint-config-standard-scss` and contains rules for CSS and SCSS. You can override or extend the rules in your own configuration as per requirement.

Stylelint can be configured in many ways e.g (package.json, .stylelintyc, stylelint.config.js, stylelintrc.yaml, stlelintrc.js, etc.)

#### To extend this library

```
extends: ["@ezyaez/stylelint-config-ez"]
```

### [Library Rules](https://github.com/ezyaez/ez-linting/blob/master/packages/stylelint-config-ez/lib/stylelint-config-ez.js)

### Building

Run `nx build stylelint-config-ez` to build the library.

### Linting

Run `nx lint stylelint-config-ez` to lint the library.

### Running unit tests

Run `nx test stylelint-config-ez` to execute the unit tests via [Jest](https://jestjs.io).

### [View Change Log](https://github.com/ezyaez/ez-linting/blob/master/CHANGELOG.md)