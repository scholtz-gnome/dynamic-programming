export const binarySearch = (items: number[], value: number): number => {
  let lowerBound = 0;
  let upperBound = items.length - 1;
  let pointer = calculateMidpoint(lowerBound, upperBound);

  if (items[pointer] === value) {
    return pointer;
  }

  while (lowerBound <= upperBound) {
    if (items[pointer] === value) {
      return pointer;
    }

    if (items[pointer] < value) {
      lowerBound = pointer + 1;
    } else {
      upperBound = pointer - 1;
    }

    pointer = calculateMidpoint(lowerBound, upperBound);
  }

  return -1;
};

const calculateMidpoint = (lowerBound: number, upperBound: number): number => {
  return Math.floor((upperBound + lowerBound) / 2);
};
