//examples about functions in javascript
function add(a, b) {
  return a + b;
}
var result = add(1, 2);
console.log("Add===========================");
console.log(result); //output: 3
console.log("===========================");
function celciusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
var result = celciusToFahrenheit(30);
console.log("CelciusToFahrenheit===========================");
console.log(result); //output: 86
console.log("===========================");
function daysToSeconds(days) {
  var daysToHours = days * 24;
  var hoursToMinutes = daysToHours * 60;
  var minutesToSeconds = hoursToMinutes * 60;
  return minutesToSeconds;
}
var result = daysToSeconds(1);
console.log("DaysToSeconds===========================");
console.log(result); //output: 86400
console.log("===========================");
