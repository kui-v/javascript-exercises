const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  const total = arr.reduce((total, num) => {
    return total += num;
  }, 0);
  return total;
};

const multiply = function(arr) {
  const total = arr.reduce((total, num) => {
    return total *= num;
  }, 1);
  return total;
};

const power = function(base, exponent) {
  let total = 1;
  for(let i = 0; i < exponent; i++) {
    total *= base;
  }
  return total;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = num; i > 0; i--) {
      total = total * i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
