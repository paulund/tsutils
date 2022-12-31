export const urlPathname = (url) => {
  const hostStart = url.indexOf('//') + 2;
  const hostEnd = url.indexOf('/', hostStart);
  const questionMarkIndex = url.indexOf('?');
  return questionMarkIndex === -1
    ? url.slice(hostEnd)
    : url.slice(hostEnd, questionMarkIndex);
}
