import { main } from './index';

describe('main', () => {
  it('returns foobar', () => {
    expect(main()).toEqual('foobar');
  });
});
