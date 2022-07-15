//function running with onclik attribute
function sayHello() {
  document.getElementById("hello").innerText = "Hello World"; //insert text in element
}

//function running with addEventListener
var helloButton1 = document.getElementById("hello-name-button1");
helloButton1.addEventListener("click", sayHelloName);
function sayHelloName() {
  var name = document.getElementById("name-input1").value;
  document.getElementById("hello-name-result1").innerText = "Hello " + name;
}

//function running with addEventListener and innerHTML
var helloButton2 = document.getElementById("hello-name-button2");
helloButton2.addEventListener("click", sayHelloName2);
function sayHelloName2() {
  var name = document.getElementById("name-input2").value;
  document.getElementById("hello-name-result2").innerHTML =
    "<h1>Hello " + name + "</h1><p>Tank you" + name + "</p>";
}

//function running with addEventListener and innerHTML
var helloButton3 = document.getElementById("hello-name-button3");

const sayHelloName3 = () => {
  //different notation for functions
  let name = document.getElementById("name-input3").value;
  var template = `<div><strong>Hello ${name}</strong><span>, Tank you "${name}".</span><div>`; //template string
  document
    .getElementById("hello-name-result3")
    .insertAdjacentHTML("beforeend", template); //insert template string in element
};

helloButton3.addEventListener("click", sayHelloName3);

//array of objects of fruits
var fruitsList = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "orange", color: "orange" },
  { name: "kiwi", color: "green" },
];

document.getElementById("fruits-button").addEventListener("click", function () {
  for (var i = 0; i < fruitsList.length; i++) {
    var fruit = fruitsList[i];
    var template = `<div><strong>${fruit.name}</strong><span>, is:  "${fruit.color}</span><div>"`; //template string
    document
      .getElementById("fruits-result")
      .insertAdjacentHTML("beforeend", template);
  }
});

document
  .getElementById("fruits-button2")
  .addEventListener("click", function () {
    fruitsList.map((fruit) =>
      document
        .getElementById("fruits-result2")
        .insertAdjacentHTML(
          "beforeend",
          `<div><strong>${fruit.name}</strong><span>, is:  "${fruit.color}</span>"<div>`
        )
    );
  });
