export const urlProtocol = (url) => {
  const colonIndex = url.indexOf(':');
  return colonIndex === -1 ? '' : url.slice(0, colonIndex);
}
