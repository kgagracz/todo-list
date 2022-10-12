export const formatDate = (date: Date) => {
  if (date)
    return `${date.getUTCFullYear()}-${
      date.getUTCMonth() + 1
    }-${date.getUTCDate()}`;
};
