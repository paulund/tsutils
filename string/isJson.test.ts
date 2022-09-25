import {isJson} from "./isJson";

test('it validates if a string is json', () => {
  expect(isJson('this is not json')).toBeFalsy();
  expect(isJson('{"title":"This is json"}')).toBeTruthy();
})
