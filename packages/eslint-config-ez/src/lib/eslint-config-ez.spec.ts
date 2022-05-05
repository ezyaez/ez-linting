import { eslintConfigEz } from './eslint-config-ez';

describe('eslintConfigEz', () => {
  it('should work', () => {
    expect(eslintConfigEz()).toEqual('eslint-config-ez');
  });
});
