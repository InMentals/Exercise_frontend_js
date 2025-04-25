import { getProducts } from "./showProductsModel.js";
import { buildProduct, buildNoProductsAdvice } from "./showProductsView.js";

export async function showProductsController(container) {
  
  try {
    const event = new CustomEvent("load-products-started");
    container.dispatchEvent(event);
    const products = await getProducts();
    drawProducts(products, container);
  } catch (error) {
    const event = new CustomEvent("load-products-error", {
      detail: error.message
    });
    container.dispatchEvent(event);
  } finally {
    const event = new CustomEvent("load-products-finished");
    container.dispatchEvent(event);
  }
}

function drawProducts(products, container){
  container.innerHTML = ""; 
  if(products.length === 0) {
    container.innerHTML = buildNoProductsAdvice();
  } else {
    products.forEach((product) => {
      const productContainer = document.createElement("a");
      productContainer.setAttribute("href", `./product-detail.html?id=${product.id}`)
      productContainer.classList.add("product");
      productContainer.innerHTML = buildProduct(product);
      container.appendChild(productContainer);
    });
  }
}