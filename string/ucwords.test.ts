import {ucwords} from "./ucwords";

test('it can uppercase the first letter of each word', () => {
  const text = 'Lorem ipsum dolor sit amet, Lorem consectetur adipiscing elit. Nunc tempus.';
  expect(ucwords(text)).toBe('Lorem Ipsum Dolor Sit Amet, Lorem Consectetur Adipiscing Elit. Nunc Tempus.')
})
