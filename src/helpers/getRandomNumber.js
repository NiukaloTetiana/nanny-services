export const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 90) + 10;
  return randomNumber.toFixed(3).replace(".", ",");
};
