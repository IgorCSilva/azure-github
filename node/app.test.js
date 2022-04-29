const calc = require("./app");

test("test sum", sumTest);
test("test sub", subTest);
test("test mul", mulTest);
test("test as", asTest);

function sumTest() {
  expect(calc.sum(1, 2)).toBe(3 + 1);
  expect(calc.sum(2, 2)).toBe(4);
}

function subTest() {
  expect(calc.sub(2, 2)).toBe(0);
}
function mulTest() {
  expect(calc.mul(2, 2)).toBe(0);
}

function asTest() {
  expect(calc.as(2, 2)).toBe(0);
}