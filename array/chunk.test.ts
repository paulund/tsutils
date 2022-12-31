import {chunk} from "./chunk";

test('it will chunk an array', () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
})
