import { eslintConfigVue } from './eslint-config-vue';

describe('eslintConfigVue', () => {
  it('should work', () => {
    expect(eslintConfigVue()).toEqual('eslint-config-vue');
  });
});
