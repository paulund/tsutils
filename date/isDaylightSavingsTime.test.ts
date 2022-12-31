import {isDaylightSavingsTime} from "./isDaylightSavingsTime";

test('it daylight savings time in August', () => {
  expect(isDaylightSavingsTime(new Date(2022, 8, 10))).toBeTruthy()
});

test('it not daylight savings time in February', () => {
  expect(isDaylightSavingsTime(new Date(2022, 2, 10))).toBeFalsy()
});
