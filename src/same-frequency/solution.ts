export const sameFrequency = (first: number, second: number) => {
  const firstString = first.toString();
  const secondString = second.toString();

  if (firstString.length !== secondString.length) return false;

  const digitCounter: Record<string, number> = {};

  for (let i = 0; i < firstString.length; i++) {
    if (!digitCounter[firstString[i]]) {
      digitCounter[firstString[i]] = 1;
    } else {
      digitCounter[firstString[i]]++;
    }

    if (!digitCounter[secondString[i]]) {
      digitCounter[secondString[i]] = -1;
    } else {
      digitCounter[secondString[i]]--;
    }
  }

  let isSameFrequency = true;

  for (const value of Object.values(digitCounter)) {
    if (value !== 0) {
      isSameFrequency = false;
    }
  }

  return isSameFrequency;
};
