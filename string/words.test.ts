import {words} from "./words";

test('it can get an array of words from an array', () => {
  const text = 'Lorem ipsum dolor sit amet, Lorem consectetur adipiscing elit. Nunc tempus.';
  expect(words(text)).toEqual([
    'Lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'Nunc',
    'tempus'
  ])
})
