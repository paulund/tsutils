import {mask} from "./mask";

test('it masks a string', () => {
  expect(mask('0123456789', 4)).toBe('******6789')
})
