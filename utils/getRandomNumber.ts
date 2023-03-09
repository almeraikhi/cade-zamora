/**
 * Function to get a random number between a min and max number
 * @param min from where to start the random number
 * @param max from where to end the random number
 * @returns
 */
export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
