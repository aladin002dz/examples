console.log("===========================");
//exemple sur les tableaux en javascript
var voitures = ["Peugeot", "Renault", "Citroen"];
console.log("Voitures: ", voitures);
console.log("Longueur du Tableau Voitures: ", voitures.length);
console.log("Voiture1 : ", voitures[0]);
console.log("Voiture2 : ", voitures[1]);
console.log("Voiture3 : ", voitures[2]);
console.log("Listing avec loop===========================");
for (var i = 0; i < voitures.length; i++) {
  console.log(voitures[i]);
}
console.log("Listing avec .forEach===========================");
voitures.forEach((voiture) => console.log(voiture));

console.log("Traitement avec .map ===========================");
var newVoitures = voitures.map((voiture) => {
  voitureEnMajiscule = voiture.toUpperCase();
  return voitureEnMajiscule;
});
console.log("New voitures: ", newVoitures);

console.log("Tableay d'objets en JSON ===========================");
//examples about arrays of objects
var voitures = [
  { marque: "Peugeot", annee: 2018, couleur: "Noire" },
  { marque: "Renault", annee: 2012, couleur: "Blanche" },
  { marque: "Citroen", annee: 2017, couleur: "Rouge" },
];
console.log("Voitures: ", voitures);
console.log("Voitures Array length: ", voitures.length);
console.log("Voiture1 : ", voitures[0]);
console.log("Voiture2 : ", voitures[1]);
console.log("Voiture3 : ", voitures[2]);
console.log("Listing avec loop===========================");
for (var i = 0; i < voitures.length; i++) {
  console.log("marque: ", voitures[i].marque);
  console.log("annee: ", voitures[i].annee);
  console.log("couleur: ", voitures[i].couleur);
  console.log("------------------------------");
}
console.log("Listing avec map ===========================");
voitures.forEach((voiture) => {
  console.log("marque: ", voiture.marque);
  console.log("annee: ", voiture.annee);
  console.log("couleur: ", voiture.couleur);
  console.log("------------------------------");
});
console.log("Array treatment avec .map ===========================");
var carsInfo = voitures.map(
  (voiture) =>
    "marque:" +
    voiture.marque +
    " annee:" +
    voiture.annee +
    " couleur:" +
    voiture.couleur
);
console.log("VoituresInfo: ", carsInfo);
