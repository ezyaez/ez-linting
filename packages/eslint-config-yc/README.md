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

This library provides lint rules for TypeScript codebases.

You can then override same rules as you could with @nuxtjs/eslint-config but also TypeScript rules under the rules section of .eslintrc configuration file. You can find the list of supported TypeScript rules [here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules).

### Example 
```
rules: {
    @typescript-eslint/no-explicit-any: warn,
  }

```
This rule doesn't allow any types to be defined, configured for warning which can be override on project level by error/off values as required.
[More Info](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md)