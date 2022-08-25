import { eslintConfigYcLogin } from './eslint-config-vue';

describe('eslintConfigYcLogin', () => {
  it('should work', () => {
    expect(eslintConfigYcLogin()).toEqual('eslint-config-vue');
  });
});
