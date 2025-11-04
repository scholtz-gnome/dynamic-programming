export const linearSearch = (data: Array<string | number>, searchItem: string | number) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === searchItem) {
      return i;
    }
  }

  return -1;
};
