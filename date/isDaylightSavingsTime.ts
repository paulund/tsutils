export const isDaylightSavingsTime = (date) => {
  const january = new Date(date.getFullYear(), 0, 1);
  const july = new Date(date.getFullYear(), 6, 1);
  return Math.min(january.getTimezoneOffset(), july.getTimezoneOffset()) === date.getTimezoneOffset();
}
