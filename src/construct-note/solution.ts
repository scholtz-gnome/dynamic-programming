type CountObject = Record<string, number>;

export const constructNote = (message: string, letters: string) => {
  if (letters.length < 1) return false;

  const letterCount = countDigits(letters);
  const messageCount = countDigits(message);

  return hasEnoughLetters(messageCount, letterCount);
};

export const countDigits = (digits: string): CountObject => {
  const digitCount: Record<string, number> = {};

  for (let i = 0; i < digits.length; i++) {
    if (!digitCount[digits[i]]) {
      digitCount[digits[i]] = 1;
    } else {
      digitCount[digits[i]]++;
    }
  }

  return digitCount;
};

export const hasEnoughLetters = (base: CountObject, supply: CountObject): boolean => {
  for (const property of Object.keys(base)) {
    if (supply[property] < base[property]) {
      return false;
    }
  }

  return true;
};
