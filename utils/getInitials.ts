/**
 * function to convert a full name to initials, defaults to 2 names
 * @param name the full name of the person
 * @param maxNamesRange range of how many names from the full name we will take their initials from
 * @returns Ahmed Hamad => AH
 */
export const getInitials = (name: string, maxNamesRange = 2) => {
  const names = name.split(' ');
  const initials = names.map((n) => n[0]).slice(0, maxNamesRange);
  return initials.join('');
};
