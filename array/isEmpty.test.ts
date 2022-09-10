import {isEmpty} from "./isEmpty";

test('it checks if array is empty', () => {
    expect(isEmpty([])).toBeTruthy()
});

test('it checks if array is not empty', () => {
    expect(isEmpty(['here'])).toBeFalsy()
});