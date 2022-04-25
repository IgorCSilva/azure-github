const sum = require('./app')

test('add 1 + 2 to equal 3', sumTest)

function sumTest() {
  expect(sum(1, 2)).toBe(3)
}