export const getRandomValueFromArray = <T>(array: T[]): T => {
  // get a random index from the array, limited by its length
  const randomIndex = Math.floor(Math.random() * array.length);
  // return the value of the array at the random index
  return array[randomIndex];
};
