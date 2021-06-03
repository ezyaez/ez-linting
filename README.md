# ez-linting

## Install Package
```
npm i -D @ez-linting/eslint-config-ez
npm i -D @ez-linting/stylelint-config-ez
```

### Eslint Usage
```
extends: ['@ez-linting/eslint-config-ez']
```
### Stylelint Usage
```
extends: ["@ez-linting/stylelint-config-ez"]
```


## Lerna Usage

### Create New Package(if required)
```
lerna create eslint-config-ez
```

### Install Package Dependency(if required)
```
lerna add eslint --scope=@ez-linting/eslint-config-ez
lerna add eslint-plugin-import --scope=@ez-linting/eslint-config-ez

```



### Required if not already exist
```
- npm i -D @typescript-eslint/eslint-plugin
- npm i -D @nuxtjs/eslint-config-typescript
```

#### Misc(Nuxt - non-dep)
- @nuxtjs/eslint-module