const calculator = require('../calculator.js');

test('return 8', () => {

  expect(calculator.calculate("3 + 2")).toBe(5);
});