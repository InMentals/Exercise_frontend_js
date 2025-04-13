function drawProducts() {
  const products = [{
    name: 'Volkswagen Golf',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus',
    price: 40,
    sell: true,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvs5YLVeWEKWQiTcEKPiShCShCHodsBaZqw&s'
  },
  {
    name: 'JBL speaker',
    description: 'Lorem ipsum dolor sit amet.',
    price: 10,
    sell: false,
    image:'https://m.media-amazon.com/images/I/71H-CPzgkhL._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Philips shaver',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibuss',
    price: 5,
    sell: true,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgt_yvXmdtTrEgZUj7tH6EjN6xOftqb8XHg&s'
  },
  {
    name: 'HP laptop',
    description: 'the best one',
    price: 600,
    sell: false,
    image:'https://www.hp.com/es-es/shop/Html/Merch/Images/c08710495_1750x1285.jpg'
  }];
  const container = document.querySelector(".products-container")

  // 1- recorrer el array de tweets
  products.forEach((product) => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
  
    let productView = `<h2>${product.name}</h2>`;
  
    if (product.sell) {
      productView += `<p class="sell">Sell</p>`;
    } else {
      productView += `<p class="buy">Buy</p>`;
    }
  
    productView += `
      <p>Price: ${product.price}€</p>
      <p>${product.description}</p>
      <img src="${product.image}" alt="${product.name}">
    `;
  
    productContainer.innerHTML = productView;
    container.appendChild(productContainer);
  });
}

drawProducts();
