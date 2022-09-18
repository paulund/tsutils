import {removeNumbers} from "./removeNumbers";

test('it removes numbers from a string', () => {
  const text = 'A1 B2 C3'
  expect(removeNumbers(text)).toBe('A B C')
})
