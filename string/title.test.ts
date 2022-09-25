import {title} from "./title";


test('it will titlecase a string', () => {
  expect(title('This is some title to titlecase')).toBe('This Is Some Title To Titlecase')
  expect(title('This is a snake_case_string')).toBe('This Is A Snake Case String')
  expect(title('This is a camelCaseString')).toBe('This Is A Camel Case String')
});
