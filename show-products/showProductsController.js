import { getProducts } from "./showProductsModel.js";
import { buildProduct, buildNoProductsAdvice } from "./showProductsView.js";

export async function showProductsController() {
    const container = document.querySelector(".products-container");
    const products = await getProducts();
    if (products.length > 0) {
      drawProducts(products, container);
    }else {
      container.innerHTML = buildNoProductsAdvice();
    }
}

function drawProducts(products, container){
  container.innerHTML = ""; 
  products.forEach((product) => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.innerHTML = buildProduct(product);
    container.appendChild(productContainer);
  });
}