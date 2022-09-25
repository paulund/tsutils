export const mask = (str: string, show: number, mask: string = '*'): string => `${str}`.slice(-show).padStart(`${str}`.length, mask);
