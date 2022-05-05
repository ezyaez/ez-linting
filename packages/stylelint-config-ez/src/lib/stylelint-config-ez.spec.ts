import { stylelintConfigEz } from './stylelint-config-ez';

describe('stylelintConfigEz', () => {
  it('should work', () => {
    expect(stylelintConfigEz()).toEqual('stylelint-config-ez');
  });
});
