const calculator = require('../calculator.js');

test('return 5', () => {
  expect(calculator.calculate("2 + 3")).toBe(5);
});

test('return 9', () => {
  expect(calculator.calculate("3 * 3")).toBe(9);
});

test('return 5', () => {
  expect(calculator.calculate("10 / 2")).toBe(5);
});

test('return 4', () => {
  expect(calculator.calculate("2 ^ 2")).toBe(4);
});

test('return 16', () => {
  expect(calculator.calculate("4 ^ 2")).toBe(16);
});