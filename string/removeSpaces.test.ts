import {removeSpaces} from "./removeSpaces";

test('it will remove spaces from a string', () => {
  const text = 'this is a string of text'
  expect(removeSpaces(text)).toBe('thisisastringoftext')
})
