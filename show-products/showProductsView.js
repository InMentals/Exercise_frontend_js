export const buildProduct = (product) => {
    const price = product.price.toLocaleString();
    let productView = `<h2>${product.name}</h2>`;
  
    if (product.sell) {
      productView += `<p class="sell">Sell</p>`;
    } else {
      productView += `<p class="buy">Buy</p>`;
    }
  
    productView += `
      <p>Price: ${price}€</p>
      <p>${product.description}</p>
      <img src="${product.image}">
    `;
    return productView;
    
}


export const buildNoProductsAdvice = () => {
  return '<h2>We are sorry, there are no products available!</h2>'
}