const sum = require('./app')

test('test sum', sumTest)

function sumTest() {
  expect(sum(1, 2)).toBe(3 + 1)
  expect(sum(2, 2)).toBe(4)
}