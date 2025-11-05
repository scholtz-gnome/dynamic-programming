export const stringSearch = (searchItem: string, substring: string): number => {
  let count = 0;

  for (let i = 0; i < searchItem.length; i++) {
    let matchCount = 0;

    for (let j = 0; j < substring.length; j++) {
      if (searchItem[i + j] === substring[j]) {
        matchCount++;

        if (matchCount === substring.length) {
          count++;
        }
      } else {
        break;
      }
    }
  }

  return count;
};
