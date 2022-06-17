
const { echox } = require('./echox');

function sum() {
  let x = 34;
  let sum = x *3;
  echox()
  return sum;
}

function divide() {
  let x = 34;
  let sum = x /3;
  echox()
  return sum;
}

module.exports = {sum, divide}

