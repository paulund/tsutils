import {isString} from "./isString";

test('it will check if a string is a string', () => {
  expect(isString('This is a string')).toBeTruthy();
  expect(isString(0)).toBeFalsy();
  expect(isString(false)).toBeFalsy();
})
