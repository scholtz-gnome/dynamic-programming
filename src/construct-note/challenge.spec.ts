import { constructNote, countDigits, hasEnoughLetters } from './solution';

describe('constructNote()', () => {
  it('Should take two arguments', () => {
    constructNote('abc', 'abcd');
  });

  it('Should return a boolean', () => {
    const result = constructNote('abc', 'abcd');

    expect(typeof result).toEqual('boolean');
  });

  describe('Given strings containing the same letters', () => {
    describe('When the letters are in the same order', () => {
      it('Should return true', () => {
        const result = constructNote('ab', 'ab');

        expect(result).toEqual(true);
      });
    });

    describe('When the letter are not in the same order', () => {
      it('Should return true', () => {
        const result = constructNote('ab', 'ba');

        expect(result).toEqual(true);
      });
    });
  });

  describe('Given two strings containing different letters', () => {
    it('Should return false', () => {
      const result = constructNote('aa', 'abc');

      expect(result).toEqual(false);
    });
  });

  describe('Given two strings', () => {
    describe('Where the supply is an empty string', () => {
      it('Should return false', () => {
        const result = constructNote('aa', '');

        expect(result).toEqual(false);
      });
    });
  });
});

describe('countLetters()', () => {
  describe('Given 2 different letters', () => {
    it('Should return an object with two properties', () => {
      const result = countDigits('ab');

      expect(result).toEqual({ a: 1, b: 1 });
    });
  });

  describe('Given 2 of the same letters', () => {
    it('Should return an object with one property', () => {
      const result = countDigits('aa');

      expect(result).toEqual({ a: 2 });
    });
  });
});

describe('hasEnoughLetters()', () => {
  describe('Given two objects with identical letters', () => {
    it('Should return true', () => {
      const countObj = { a: 1 };
      const countObj2 = { a: 2 };

      const result = hasEnoughLetters(countObj, countObj2);

      expect(result).toEqual(true);
    });
  });
});
