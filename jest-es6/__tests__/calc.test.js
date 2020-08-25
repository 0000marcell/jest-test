import calc from '../src/calc';

test('Adds two numbers', () => {
  expect(calc(2, 2)).toEqual(4);
});
