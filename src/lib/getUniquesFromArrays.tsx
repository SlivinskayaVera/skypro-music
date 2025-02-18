export const getUniquesFromArrays = (array: string[]) => {
  const uniqueStringsArray = array.reduce((accumulator, current) => {
    const itemFromArray = current[0];
    if (!accumulator.includes(itemFromArray)) {
      accumulator.push(itemFromArray);
    }
    return accumulator;
  }, [] as string[]);
  return uniqueStringsArray;
};
