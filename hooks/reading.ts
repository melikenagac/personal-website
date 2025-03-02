export const useReadingTime = (contentLenght: number) => {
  const wordsPerMinute = 200;
  return Math.ceil(contentLenght / wordsPerMinute);
};