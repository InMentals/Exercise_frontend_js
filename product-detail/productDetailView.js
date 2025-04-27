export const buildProductDetailView = (product) => {
    const date = new Date(product.updatedAt)
    let productView = `<div class="detail"><h2>${product.name}</h2>`;
  
    if (product.sell) {
      productView += `<p class="sell">Sell</p>`;
    } else {
      productView += `<p class="buy">Buy</p>`;
    }
  
    productView += `
      <p>Price: ${product.price}€</p>
      <p>${product.description}</p>
      <img src="${product.image}">
      <p>User: ${product.user.username}</p>
      <p>Last update: ${date.toLocaleString()}</p>
      </div>
    `;
    return productView
  }

export const buildErrorView = () => {
  let errorView = `<h2>Error loading product detail</h2>
  <button class="button" onclick="window.location.href='/'">Go back to products list</button>`;
  return errorView;
}

export const buildDeleteProductButton = () => {
  const removeButtonContainer = document.createElement("div");
  removeButtonContainer.classList.add("removeButtonContainer");
  const removeButton = document.createElement("button");
  removeButton.textContent = 'Delete product';
  removeButton.classList.add("button");
  removeButtonContainer.appendChild(removeButton);
  return removeButtonContainer;
}