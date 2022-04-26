function sum(a, b) {
  let result = 0

  if (a == 2) {
    result = a + b
  } else {
    result = a + b + 1
  }
  
  return result
}

function sub(a, b) {
  return a - b
}

function mul(a, b) {
  return a - b
}

function div(a, b) {
  return a - b
}
module.exports = {
  sum,
  sub,
  mul
}