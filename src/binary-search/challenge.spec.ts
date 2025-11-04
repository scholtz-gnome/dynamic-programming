import { binarySearch } from './solution';

describe('binarySearch()', () => {
  it('accepts an array and a value as arguments', () => {
    binarySearch([1], 1);
  });

  it('returns a number', () => {
    const result = binarySearch([1], 1);

    expect(typeof result).toEqual('number');
  });

  describe('When the value passed in exists in the array', () => {
    describe('When passed an array of 1 item', () => {
      it('returns 0', () => {
        const result = binarySearch([1], 1);

        expect(result).toEqual(0);
      });
    });

    describe('When passed an array of 2 items', () => {
      it('returns 0', () => {
        const result = binarySearch([1, 2], 1);

        expect(result).toEqual(0);
      });
    });

    describe('When passed an array of 3 items', () => {
      it('returns 0', () => {
        const result = binarySearch([1, 2, 3], 2);

        expect(result).toEqual(1);
      });
    });

    describe('When passed an array of 4 items', () => {
      it('returns 0', () => {
        const result = binarySearch([1, 2, 3, 4], 3);

        expect(result).toEqual(2);
      });
    });

    describe('When passed an array of 6 items', () => {
      it('returns 0', () => {
        const result = binarySearch([1, 2, 3, 4, 5, 6], 2);

        expect(result).toEqual(1);
      });
    });

    describe('Various success tests', () => {
      it('returns the index', () => {
        {
          const result = binarySearch(
            [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
            95
          );

          expect(result).toEqual(16);
        }

        {
          const result = binarySearch(
            [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
            10
          );

          expect(result).toEqual(2);
        }
      });
    });
  });

  describe('When the value passed in does not exist in the array', () => {
    it('returns -1', () => {
      {
        const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9);

        expect(result).toEqual(-1);
      }

      {
        const result = binarySearch([1, 2, 3, 4, 5], 6);

        expect(result).toEqual(-1);
      }
    });
  });
});
