const calculator = require('../calculator.js');

test('return 5', () => {
  expect(calculator.calculate("2 + 3")).toBe(5);
});

test('return 9', () => {
  expect(calculator.calculate("3 * 3")).toBe(9);
});