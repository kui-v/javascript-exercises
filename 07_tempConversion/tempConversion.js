const convertToCelsius = function(degrees) {
  let conversion = ((degrees - 32) * (5/9))
  if (conversion % 1 === 0) {
    return conversion
  } else {
    return Number(conversion.toFixed(1))
  }
};

const convertToFahrenheit = function(degrees) {
  let conversion = ((degrees * (9/5)) + 32)
  if (conversion % 1 === 0) {
    return conversion
  } else {
    return Number(conversion.toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
