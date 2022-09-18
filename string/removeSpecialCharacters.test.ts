import {removeSpecialCharacters} from "./removeSpecialCharacters";

test('it removes special characters from a string', () => {
  const text = 'A! B@ C£ D$ E% F^ G& H* I( J)'
  expect(removeSpecialCharacters(text)).toBe('A B C D E F G H I J')
})
