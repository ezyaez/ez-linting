import { eslintConfigYcLogin } from './eslint-config-yc-login';

describe('eslintConfigYcLogin', () => {
  it('should work', () => {
    expect(eslintConfigYcLogin()).toEqual('eslint-config-yc-login');
  });
});
