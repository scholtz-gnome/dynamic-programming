import { sameFrequency } from './solution';

describe('sameFrequency()', () => {
  it('takes two arguments', () => {
    sameFrequency(1, 2);
  });

  it('returns a boolean', () => {
    const result = sameFrequency(1, 2);

    expect(typeof result).toBe('boolean');
  });

  describe('When given two identical numbers', () => {
    it('returns true', () => {
      const result = sameFrequency(1, 1);

      expect(result).toEqual(true);
    });
  });

  describe('When given two numbers containing the same frequency of digits', () => {
    it('returns true', () => {
      {
        const result = sameFrequency(11, 11);

        expect(result).toEqual(true);
      }

      {
        const result = sameFrequency(182, 281);

        expect(result).toEqual(true);
      }

      {
        const result = sameFrequency(3589578, 5879385);

        expect(result).toEqual(true);
      }

      {
        const result = sameFrequency(
          111111111111111111111111111111,
          111111111111111111111111111111
        );

        expect(result).toEqual(true);
      }
    });
  });

  describe('When given two numbers containing a different frequency of digits', () => {
    it('returns false', () => {
      {
        const result = sameFrequency(11, 111);

        expect(result).toEqual(false);
      }

      {
        const result = sameFrequency(34, 14);

        expect(result).toEqual(false);
      }

      {
        const result = sameFrequency(22, 222);

        expect(result).toEqual(false);
      }

      {
        const result = sameFrequency(11111111111111111111, 111111111111111111111);

        expect(result).toEqual(false);
      }
    });
  });
});
