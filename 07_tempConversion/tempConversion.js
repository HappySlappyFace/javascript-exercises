const convertToCelsius = function(n) {
  let result=Math.round((n-32)*(5/9)*10)/10;
  return result;
};

const convertToFahrenheit = function(n) {
  let result=Math.round(((n*(9/5))+32)*10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
