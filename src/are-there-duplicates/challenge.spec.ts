import { areThereDuplicates } from './solution';

describe('areThereDuplicates()', () => {
  it('takes a variable number of arguments', () => {
    areThereDuplicates(1, 2, 3, 4, 5);
  });

  it('returns a boolean', () => {
    const result = areThereDuplicates(1, 2, 3);

    expect(typeof result).toEqual('boolean');
  });

  describe('When passed arguments where at least two digits repeat', () => {
    it('returns true', () => {
      {
        const result = areThereDuplicates(1, 1);

        expect(result).toEqual(true);
      }

      {
        const result = areThereDuplicates(1, 2, 2);

        expect(result).toEqual(true);
      }

      {
        const result = areThereDuplicates('a', 'b', 'c', 'a');

        expect(result).toEqual(true);
      }

      {
        const result = areThereDuplicates('a', 'b', 'c', 'd', 'a', 'c');

        expect(result).toEqual(true);
      }

      {
        const result = areThereDuplicates('b', 'c', 'e', 'd', 'a', 'a');

        expect(result).toEqual(true);
      }
    });
  });

  describe('When passed different digits', () => {
    it('returns false', () => {
      {
        const result = areThereDuplicates(1, 2);

        expect(result).toEqual(false);
      }

      {
        const result = areThereDuplicates(1, 2, 3);

        expect(result).toEqual(false);
      }
    });
  });
});
