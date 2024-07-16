const convertToCelsius = function(temp) {
  let cel = (temp - 32) * 5 / 9;
  //rounding
  cel = Math.round(cel * 10) / 10;
  return cel;
};

const convertToFahrenheit = function(temp) {
  let far = (temp * 9 / 5) + 32;
  //rounding
  far = Math.round(far * 10) / 10;
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
