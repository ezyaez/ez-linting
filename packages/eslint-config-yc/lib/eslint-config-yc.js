'use strict';

module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', '@nuxtjs/eslint-config-typescript'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
  },
}
