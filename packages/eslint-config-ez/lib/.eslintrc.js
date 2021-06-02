module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  rules: {
    "no-unused-vars": 0,
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    "comma-style": [
      "error",
      "last",
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
  },
  globals: {
    browser: true,
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true,
    node: true,
  },
};
