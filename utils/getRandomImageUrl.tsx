import { getRandomValueFromArray } from './getRandomValueFromArray';

const imagesUrls = [
  '',
  '/images/male_a.png',
  '/images/male_b.png',
  '/images/female_a.png',
  '/images/female_b.png',
];

export const getRandomImageUrl = () => getRandomValueFromArray(imagesUrls);
