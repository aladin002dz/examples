console.log("===========================");
//example about arrays in javascript
var cars = ["BMW", "Mercedes", "Audi"];
console.log("Cars: ", cars);
console.log("Cars Array length: ", cars.length);
console.log("Car1 : ", cars[0]);
console.log("Car2 : ", cars[1]);
console.log("Car3 : ", cars[2]);
console.log("Listing by loop===========================");
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log("Listing by .forEach===========================");
cars.forEach((car) => console.log(car));

console.log("More treatment with .map ===========================");
var newCars = cars.map((car) => {
  carUpperCase = car.toUpperCase();
  return carUpperCase;
});
console.log("New cars: ", newCars);

console.log("Array of objects ===========================");
//examples about arrays of objects
var cars = [
  { brand: "BMW", year: 2018, color: "Black" },
  { brand: "Mercedes", year: 2012, color: "White" },
  { brand: "Audi", year: 2017, color: "Red" },
];
console.log("Cars: ", cars);
console.log("Cars Array length: ", cars.length);
console.log("Car1 : ", cars[0]);
console.log("Car2 : ", cars[1]);
console.log("Car3 : ", cars[2]);
console.log("Listing by loop===========================");
for (var i = 0; i < cars.length; i++) {
  console.log("brand: ", cars[i].brand);
  console.log("year: ", cars[i].year);
  console.log("color: ", cars[i].color);
  console.log("------------------------------");
}
console.log("Listing by map ===========================");
cars.forEach((car) => {
  console.log("brand: ", car.brand);
  console.log("year: ", car.year);
  console.log("color: ", car.color);
  console.log("------------------------------");
});
console.log("Array treatment by .map ===========================");
var carsInfo = cars.map(
  (car) => "brand:" + car.brand + " year:" + car.year + " color:" + car.color
);
console.log("CarsInfo: ", carsInfo);
