const divideNumbers = require('../src/divideNumbers');

test('divides 10 / 2 to equal 5', () => {
  expect(divideNumbers(10, 2)).toBe(5);
});

test('divides 9 / 3 to equal 3', () => {
  expect(divideNumbers(9, 3)).toBe(3);
});

test('divides 5 / 5 to equal 1', () => {
  expect(divideNumbers(5, 5)).toBe(1);
});

test('throws error when dividing by zero', () => {
  expect(() => divideNumbers(5, 0)).toThrow('Cannot divide by zero');
});