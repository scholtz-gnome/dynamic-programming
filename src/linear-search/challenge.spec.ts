import { linearSearch } from './solution';

describe('linearSearch()', () => {
  it('accepts an array and a value as arguments', () => {
    linearSearch([1], 1);
  });

  it('returns a number', () => {
    const result = linearSearch([1], 1);

    expect(typeof result).toEqual('number');
  });

  describe('When passed an array that contains the search item', () => {
    it('returns the index of the search item', () => {
      {
        const result = linearSearch([1], 1);

        expect(result).toEqual(0);
      }

      {
        const result = linearSearch([10, 15, 20, 25, 30], 15);

        expect(result).toEqual(1);
      }

      {
        const result = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4);

        expect(result).toEqual(5);
      }

      {
        const result = linearSearch([100], 100);

        expect(result).toEqual(0);
      }

      {
        const result = linearSearch(['a', 'aa', '100'], 'aa');

        expect(result).toEqual(1);
      }
    });
  });

  describe('When passed an array that does not contain the search item', () => {
    it('returns -1', () => {
      {
        const result = linearSearch([1, 2, 3, 4, 5], 6);

        expect(result).toEqual(-1);
      }

      {
        const result = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10);

        expect(result).toEqual(-1);
      }

      {
        const result = linearSearch([100], 200);

        expect(result).toEqual(-1);
      }

      {
        const result = linearSearch(['a', 'b'], 'aa');

        expect(result).toEqual(-1);
      }

      {
        const result = linearSearch(['a', 'b', '100'], 100);

        expect(result).toEqual(-1);
      }
    });
  });
});
