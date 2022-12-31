import {groupBy} from "./groupBy";

test('it will group by key', () => {
  const array = [
    {name: 'john', age: 20},
    {name: 'jane', age: 20},
    {name: 'peter', age: 35},
    {name: 'paul', age: 35}
  ]
  expect(groupBy(array, 'age')).toEqual({
    20: [{name: 'john', age: 20}, {name: 'jane', age: 20}],
    35: [{name: 'peter', age: 35}, {name: 'paul', age: 35}]
  });
});
