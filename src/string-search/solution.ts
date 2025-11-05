export const stringSearch = (searchItem: string, substring: string): number => {
  let count = 0;

  for (let i = 0; i < searchItem.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (searchItem[i + j] === substring[j]) {
        if (j === substring.length - 1) {
          count++;
        }
      } else {
        break;
      }
    }
  }

  return count;
};
