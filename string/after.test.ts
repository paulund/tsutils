import {after} from "./after";

test('it returns everything after a given value', () => {
    const startingText = 'My name is Paul'
    expect(after(startingText, 'My name is ')).toBe('Paul')
})

test('it returns everything empty string is not found', () => {
    const startingText = 'My name is Paul'
    expect(after(startingText, 'My is name ')).toBe('')
})