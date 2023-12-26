const multiplyNumbers = require('../src/multiplyNumbers');

test('multiplies 3 * 2 to equal 6', () => {
  expect(multiplyNumbers(3, 2)).toBe(6);
});

test('multiplies 5 * 5 to equal 25', () => {
  expect(multiplyNumbers(5, 5)).toBe(25);
});

test('multiplies 0 * 10 to equal 0', () => {
  expect(multiplyNumbers(0, 10)).toBe(0);
});