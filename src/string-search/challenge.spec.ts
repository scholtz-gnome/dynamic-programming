import { stringSearch } from './challenge';

describe('stringSearch()', () => {
  it('takes two arguments', () => {
    stringSearch('asdf', 'sd');
  });

  it('returns a number', () => {
    const result = stringSearch('asdf', 'sd');

    expect(typeof result).toEqual('number');
  });

  describe('When the given string contains one occurrence of the substring', () => {
    it('returns 1', () => {
      {
        const result = stringSearch('asdf', 'sd');

        expect(result).toEqual(1);
      }

      {
        const result = stringSearch('hello', 'll');

        expect(result).toEqual(1);
      }
    });
  });

  describe('When the given string contains two occurrences of the substring', () => {
    it('returns 2', () => {
      const result = stringSearch('asdfasdf', 'sd');

      expect(result).toEqual(2);
    });
  });

  describe('When the given string contains no occurrences of the substring', () => {
    it('returns 0', () => {
      const result = stringSearch('asdfsd', 'zd');

      expect(result).toEqual(0);
    });
  });

  describe('When the given string contains no occurrences of the substring', () => {
    it('returns 0', () => {
      const result = stringSearch('helo', 'll');

      expect(result).toEqual(0);
    });
  });
});
