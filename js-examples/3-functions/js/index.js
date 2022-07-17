//examples about functions in javascript
function add(a, b) {
  return a + b;
}
var result = add(1, 2);
console.log("1+2===========================");
console.log(result); //output: 3

console.log("CelciusToFahrenheit===========================");
function celciusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

//30° C to Fahrenheit
var celcius = 30;
result = celciusToFahrenheit(celcius);
console.log("30° C to Fahrenheit===========================");
console.log(result); //output: 86

//12° C to Fahrenheit
celcius = 12;
console.log("12° C to Fahrenheit===========================");
result = celciusToFahrenheit(celcius);
console.log(result); //output: 54

console.log("DaysToSeconds===========================");
function daysToSeconds(days) {
  var daysToHours = days * 24;
  var hoursToMinutes = daysToHours * 60;
  var minutesToSeconds = hoursToMinutes * 60;
  return minutesToSeconds;
}

//Seconds in 1 days
var days = 1;
console.log("Seconds in 1 Day===========================");
result = daysToSeconds(days);
console.log(result); //output: 86400

//Seconds in 1 week
days = 7;
result = daysToSeconds(days);
console.log("Seconds in 1 Week===========================");
console.log(result); //output: 604800
console.log("===========================");
