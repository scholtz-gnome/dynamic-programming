export const linearSearch = (data: Array<string | number>, searchItem: string | number) => {
  let indexOf = -1;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === searchItem) {
      indexOf = i;
    }
  }

  return indexOf;
};
