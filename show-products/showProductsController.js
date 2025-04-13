import { getProducts } from "./showProductsModel.js";
import { buildProduct, buildNoProductsAdvice } from "./showProductsView.js";

export async function showProductsController() {
  
  try {
    const products = await getProducts();
    drawProducts(products);
  } catch (error) {
    alert(error.message);
  }
}

function drawProducts(products){
  const container = document.querySelector(".products-container");
  container.innerHTML = ""; 
  if(products.length === 0) {
    container.innerHTML = buildNoProductsAdvice();
  } else {
    products.forEach((product) => {
      const productContainer = document.createElement("div");
      productContainer.classList.add("product");
      productContainer.innerHTML = buildProduct(product);
      container.appendChild(productContainer);
    });
  }
}