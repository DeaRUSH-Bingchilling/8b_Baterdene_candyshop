const products = [
  {
    name: "Twix",
    price: 1000,
    description: "Candy",
    image:
      "https://www.twix.com/sites/g/files/fnmzdf236/files/migrate-product-files/pm57alsea7mspqhhgfuf.png",
  },
  {
    name: "Snickers",
    price: 1200,
    description: "Candy",
    image:
      "https://www.snickers.com/sites/g/files/fnmzdf616/files/migrate-product-files/dryeqrv2efldaaoyceat.png",
  },
  {
    name: "Skittles",
    price: 2300,
    description: "Candy",
    image:
      "https://www.skittles.com/sites/g/files/fnmzdf586/files/migrate-product-files/bam8afcev37jvz2mfpnk.png",
  },
];
function PrintProducts() {
  const productsContainer = document.getElementById("products");
  let newDiv = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    console.log(`${product.name}` - `${product.price}`);

    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
    <div class="aaaaaaaaaa">
      <img class='productImage' src="${product.image}"/>
      <div class="title">${product.name}</div>
      <p>${product.description}</p>
      <p id="price">${product.price}$</p>
      <button onclick="AddItem('${product.name}')">add</button>
      <button onclick="MinusItem('${product.name}')">minus</button>
    </div>
    `;

    newDiv += div.outerHTML;
  }

  productsContainer.innerHTML = newDiv;
}

window.onload = PrintProducts;
const userbasket = [];

function AddItem(itemName) {
  const itemIndex = userbasket.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userbasket[itemIndex].quantity += 1;
  } else {
    userbasket.push({ name: itemName, quantity: 1 });
  }

  Basket();
}

function MinusItem(itemName) {
  const itemIndex = userbasket.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userbasket[itemIndex].quantity -= 1;

    if (userbasket[itemIndex].quantity === 0) {
      userbasket.splice(itemIndex, 1);
    }
  }

  Basket();
}
function Basket() {
  const basketDiv = document.getElementById("basket");
  const basketHtml = userbasket
    .map(
      ({ name, quantity }) => `
    <h1><div class="blue">${name}</div> - ${quantity} </h1>
  `
    )
    .join("");
  basketDiv.innerHTML = basketHtml;
  Purchase();
}
function Purchase() {
  let total = 0;
  for (let i = 0; i < userbasket.length; i++) {
    const { name, quantity } = userbasket[i];
    const product = products.find((p) => p.name === name);
    if (product) {
      total += product.price * quantity;
    }
  }

  document.getElementById("total").innerHTML = total + "$";
  Clear();
}
