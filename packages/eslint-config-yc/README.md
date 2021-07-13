# `eslint-config-yc`


## Install Package
```
npm i -D @ezyaez/eslint-config-yc
```

### Eslint Usage
```
extends: ['@ezyaez/eslint-config-yc']
```

### Rules 

```
@typescript-eslint/no-explicit-any: warn
```
This rule doesn't allow any types to be defined, configured for warning which can be override on project level by error/off values as required.
[More Info](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md)