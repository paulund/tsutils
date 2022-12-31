import {diff} from "./diff";

test('it will diff two arrays', () => {
  expect(diff([1, 2, 3, 4, 5], [2, 4])).toEqual([1, 3, 5]);
})
