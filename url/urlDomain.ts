import {urlHost} from "./urlHost";

export const urlDomain = (url) => {
  const host = urlHost(url);
  const parts = host.split('.');
  const partsCount = parts.length;
  if (partsCount === 1) {
    return host;
  }
  return parts[partsCount - 2] + '.' + parts[partsCount - 1];
}
