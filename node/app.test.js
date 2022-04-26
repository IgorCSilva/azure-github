const calc = require('./app')

test('test sum', sumTest)

function sumTest() {
  expect(calc.sum(1, 2)).toBe(3 + 1)
  expect(calc.sum(2, 2)).toBe(4)
}