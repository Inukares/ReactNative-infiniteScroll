export const getRandomString = function(length = 4) {
  return (
    Math.random()
      .toString(36)
      .substring(2) +
    new Date()
      .getTime()
      .toString(32)
      .slice(0, length)
  );
};
