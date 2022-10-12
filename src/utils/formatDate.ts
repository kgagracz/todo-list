export const formatDate = (date: Date) => {
  return `${
    date.getUTCMonth() + 1
  }-${date.getUTCDate()}-${date.getUTCFullYear()}`;
};
