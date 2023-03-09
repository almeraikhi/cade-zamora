import { Gender } from '@prisma/client';

/**
 *
 * @returns returns a random gender from the provided options in the database schema
 */
export const getRandomGenderOption = (): Gender => {
  // we added the 'as const' to let typescript know that the array is not going to change, so it wouldn't infer it as string[]
  const genders = ['male', 'female', 'unspecified'] as const;
  // get a random index from the array, limited by its length
  const randomIndex = Math.floor(Math.random() * genders.length);
  // return the value of the array at the random index
  return genders[randomIndex];
};
