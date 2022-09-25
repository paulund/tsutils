import {limit} from "./limit";

test('it will limit a string to a number of characters', () => {
  expect(limit('Limit this text to 10 characters', 10)).toBe('Limit this');
});
