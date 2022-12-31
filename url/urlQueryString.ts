export const urlQueryString = (url) => {
  const questionMarkIndex = url.indexOf('?');
  return questionMarkIndex === -1 ? '' : url.slice(questionMarkIndex + 1);
}
