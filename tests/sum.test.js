const calculator = require('../calculator.js');

test('return -5', () => {

  expect(calculator.calculate("3 - 8")).toBe(-5);
});