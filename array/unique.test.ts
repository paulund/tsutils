import {unique} from "./unique";

test('it gets the unique values inside an array', () => {
  const data = [
    'this',
    'is',
    'an',
    'array',
    'of',
    'text',
    'this',
    'is',
    'an',
    'array',
    'of',
    'text',
  ];
  expect(unique(data).length).toBe(6)
})
