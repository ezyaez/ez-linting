import { eslintConfigYc } from './eslint-config-yc';

describe('eslintConfigYc', () => {
  it('should work', () => {
    expect(eslintConfigYc()).toEqual('eslint-config-yc');
  });
});
