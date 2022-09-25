import {slug} from "./slug";

test('it will slugify a string', () => {
  expect(slug('Slug this text!')).toBe('slug-this-text');
})
