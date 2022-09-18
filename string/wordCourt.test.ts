import {wordCount} from "./wordCount";

test('it can count how many words in a string', () => {
  const text = 'This is a sentence of text'
  expect(wordCount(text)).toBe(6);
})
