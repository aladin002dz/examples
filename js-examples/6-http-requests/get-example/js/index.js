mainWithAsyncAwait();
//mainWithPromisesChaining();

async function mainWithAsyncAwait() {
  const response = await fetch("http://localhost:3001/api/products");
  const products = await response.json();
  console.log(products);
  products.forEach((product) => {
    document.getElementById("products-listing").insertAdjacentHTML(
      "beforeend",
      `
    <div>  
      <h2>${product.name}</h2>
      <p>Description: ${product.description}</p>
      <p>Price: ${product.price}</p>
      <img src="${product.image}" alt="image of the product ${product.name}">
    </div>
    `
    );
  });
}

function mainWithPromisesChaining() {
  fetch("http://localhost:3001/api/products")
    .then((response) => response.json())
    .then((products) => {
      console.log(products);
      products.forEach((product) => {
        document.getElementById("products-listing").insertAdjacentHTML(
          "beforeend",
          `
        <div>  
          <h2>${product.name}</h2>
          <p>Description: ${product.description}</p>
          <p>Price: ${product.price}</p>
          <img src="${product.image}" alt="image of the product ${product.name}">
        </div>
        `
        );
      });
    })
    .catch((error) => console.log(error));
}
