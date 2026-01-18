export const getYears = (startYear: number): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};
