import { products } from "./showProductsModel.js";
import { buildProduct } from "./showProductsView.js";

export function showProductsController() {
    const container = document.querySelector(".products-container");
    products.forEach((product) => {
        const productContainer = document.createElement("div");
        productContainer.classList.add("product");
        const productView = buildProduct(product);
        productContainer.innerHTML = productView;
        container.appendChild(productContainer);
      });




    

}