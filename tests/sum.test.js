const calculator = require('../calculator.js');

test('return 5', () => {

  expect(calculator.calculate("3 + 2")).toBe(5);
});