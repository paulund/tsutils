import {before} from "./before";

test('it returns everything before a given value', () => {
    const startingText = 'My name is Paul'
    expect(before(startingText, 'Paul')).toBe('My name is ')
})

test('it returns everything empty string is not found', () => {
    const startingText = 'My name is Paul'
    expect(before(startingText, 'My is name ')).toBe('')
})