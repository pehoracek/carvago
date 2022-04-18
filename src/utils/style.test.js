import {breakpoint} from './style';

describe('breakpoint', () => {
  test('return css breakpoint', () => {
    expect(breakpoint(1024)).toBe('@media screen and (min-width: 1024px)');
  });
});
