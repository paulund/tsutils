export const excerpt = (text: string, length: number = 120, excerptSymbol: string = '...'): string =>
    `${text.substring(0, length)}${excerptSymbol}`