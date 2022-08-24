'use strict';

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  plugins: ['vue',],
  parserOptions: {
   ecmaVersion: 'latest',
  },
  globals: {
    browser: true,
  },
  ignorePatterns: ["/example", "/dist"],
  rules: {
    'no-unused-vars': 'error',
    'vue/no-unused-vars': 'error',
    'no-undef': 'warn',
    'vue/no-undef-components': 'warn',
    'vue/no-undef-properties': 'warn',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-style': [
      'error',
      'last',
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

    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
    "generator-star-spacing": "off",

    // Allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "no-lonely-if": "error",
    curly: ["error", "all"],
    "require-await": "error",
    "dot-notation": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "vue/no-useless-v-bind": ["error", {
      "ignoreIncludesComment": false,
      "ignoreStringEscape": false,
    }],
    "vue/no-parsing-error": [
      "error",
      {
        "x-invalid-end-tag": false,
      },
    ],
    "vue/no-v-html": "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 5,
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jquery: true,
    mocha: true,
  },
}
