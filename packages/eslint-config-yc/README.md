# `eslint-config-yc`


## Install Package
```
npm i -D @ezyaez/eslint-config-yc
```

### Eslint Usage
```
extends: ['@ezyaez/eslint-config-yc']
```

### Description
  **"extends": ['@ezyaez/eslint-config-yc']** tells ESLint that your config extends the given configurations. ESLint extends configurations recursively, so a shared **@ezyaez/eslint-config-yc** configuration can also have its own extends, plugins, parser properties which will apply to the .eslintrc configuration.

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