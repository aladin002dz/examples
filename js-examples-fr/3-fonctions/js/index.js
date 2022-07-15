//exemples sur les fonctions en javascript
function add(a, b) {
  return a + b;
}
var resultat = add(1, 2);
console.log("1 + 2===========================");
console.log(resultat); //output: 3
console.log("===========================");

function celciusEnFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
var resultat = celciusEnFahrenheit(30);
console.log("30° Celcius En Fahrenheit===========================");
console.log(resultat); //output: 86

console.log("===========================");
function joursEnSencondes(jours) {
  var joursEnHeures = jours * 24;
  var heuresEnMinutes = joursEnHeures * 60;
  var minutesEnSecondes = heuresEnMinutes * 60;
  return minutesEnSecondes;
}
var resultat = joursEnSencondes(1);
console.log("1 jour en secondes===========================");
console.log(resultat); //output: 86400
console.log("===========================");
