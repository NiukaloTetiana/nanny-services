export const getRandomNumber = () => {
  const randomNumber = Math.random() * (999 - 100) + 100;
  return randomNumber.toFixed(3);
};
