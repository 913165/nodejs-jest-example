const subtractNumbers = require('../src/subtractNumbers');

test('subtract 5 - 2 to equal 3', () => {
  expect(subtractNumbers(5, 2)).toBe(3);
});

test('subtract 10 - 5 to equal 5', () => {
  expect(subtractNumbers(10, 5)).toBe(5);
});

test('subtract 7 - 3 to equal 4', () => {
  expect(subtractNumbers(7, 3)).toBe(4);
});