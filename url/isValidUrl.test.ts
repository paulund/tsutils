import {isValidUrl} from "./isValidUrl";

test('it is a valid URL', () => {
  expect(isValidUrl('https://google.com')).toBe(true)
})

test('it is not a valid URL', () => {
  expect(isValidUrl('this is not a valid url')).toBe(false)
})
