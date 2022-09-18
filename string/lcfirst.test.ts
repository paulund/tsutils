import { lcfirst } from "./lcfirst";

test('it will lower case first letter', () => {
  const startingText = 'HERE IS SOME TEXT';
  expect(lcfirst(startingText)).toBe('hERE IS SOME TEXT');
})
