import { ucfirst } from "./ucfirst";

test('it capitalize first letter', () => {
    const startingText = 'here is some text';
    expect(ucfirst(startingText)).toBe('Here is some text');
})