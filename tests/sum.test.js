const calculator = require('../calculator.js');

test('return 5', () => {
  expect(calculator.calculate("2 + 3")).toBe(5);
});