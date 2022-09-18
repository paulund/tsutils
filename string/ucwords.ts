export const ucwords = (text: string): string => text.toLocaleLowerCase()
  .replace(/(?<= )[^\s]|^./g, str => str.toLocaleUpperCase())
