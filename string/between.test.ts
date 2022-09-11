import {between} from "./between";

test('it can find text between two values', () => {
   const startingText = 'this is a sentence of text';
   expect(between(startingText, 'this is a', 'of text')).toBe(' sentence ')
});

test('it will return empty if cant find values', () => {
   const startingText = 'this is a sentence of text';
   expect(between(startingText, 'doesnt exist', 'in text')).toBe('')
});