const addNumbers = require('../src/addNumbers');

test('adds 1 + 2 to equal 3', () => {
  expect(addNumbers(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(addNumbers(5, 7)).toBe(12);
});