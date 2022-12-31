export const urlHost = (url) => {
  const hostStart = url.indexOf('//') + 2;
  const hostEnd = url.indexOf('/', hostStart);
  return hostEnd === -1 ? url.slice(hostStart) : url.slice(hostStart, hostEnd);
}
