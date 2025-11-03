export const areThereDuplicates = (...args: Array<string | number>) => {
  let start = 0;
  let end = 1;

  while (end < args.length) {
    if (args[start] === args[end]) {
      return true;
    } else {
      if (end === args.length - 1) {
        start++;
        end = start + 1;
      } else {
        end++;
      }
    }
  }

  return false;
};
