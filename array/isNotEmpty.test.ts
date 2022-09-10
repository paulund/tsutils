import {isNotEmpty} from "./isNotEmpty";


test('it checks if array is not empty', () => {
    expect(isNotEmpty(['here'])).toBeTruthy()
});

test('it checks if array is empty', () => {
    expect(isNotEmpty([])).toBeFalsy()
});