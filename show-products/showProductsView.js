export const buildProduct = (product) => {
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
    return productView;
    
}