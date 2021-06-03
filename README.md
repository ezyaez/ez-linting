# ez-linting

### Check Package Specific Doc
- [ESLint](
https://github.com/ezyaez/ez-linting/tree/piyush/eslint-core/packages/eslint-config-ez#readme)
- [StyleLint](https://github.com/ezyaez/ez-linting/tree/piyush/eslint-core/packages/stylelint-config-ez#readme)


### Lerna Usage/Development

### Create New Package(if required)
```
lerna create eslint-config-ez
```

### Install Package Dependency(if required)
```
lerna add eslint --scope=@ez-linting/eslint-config-ez
lerna add eslint-plugin-import --scope=@ez-linting/eslint-config-ez

```


### Install if not already exist/required
```
- npm i -D @typescript-eslint/eslint-plugin
- npm i -D @nuxtjs/eslint-config-typescript
```

#### Misc(Nuxt - non-dep)
- @nuxtjs/eslint-module