const calc = require('./app')

test('test sum', sumTest)
test('test sub', subTest)

function sumTest() {
  expect(calc.sum(1, 2)).toBe(3 + 1)
  expect(calc.sum(2, 2)).toBe(4)
}

function subTest() {
  expect(calc.sub(2, 2)).toBe(0)
}