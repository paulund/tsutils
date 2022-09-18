import {removeSpace} from "./removeSpace";

test('it will remove spaces from a string', () => {
  const text = 'this is a string of text'
  expect(removeSpace(text)).toBe('thisisastringoftext')
})
