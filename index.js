import { showProductsController } from "./show-products/showProductsController.js";

import { loaderController } from "./loader/loaderController.js";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.querySelector(".products-container");
    const loaderContainer = document.querySelector(".loader-container");
    const {show, hide} = loaderController(loaderContainer);

    productsContainer.addEventListener('load-products-started', () => {
        show();
    })
    productsContainer.addEventListener('load-products-finished', () => {
        hide();
    })

    showProductsController(productsContainer);

})