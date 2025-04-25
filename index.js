import { showProductsController } from "./show-products/showProductsController.js";
import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";   
import { sessionController } from "./session/sessionController.js"; 

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.querySelector(".products-container");
    const loaderContainer = document.querySelector(".loader-container");
    const notificationsContainer = document.querySelector(".notifications-container");
    const session = document.querySelector(".session")
    const {show, hide} = loaderController(loaderContainer);
    const {showNotification} = notificationsController(notificationsContainer);



    productsContainer.addEventListener('load-products-started', () => {
        show();
    });
    productsContainer.addEventListener('load-products-finished', () => {
        hide();
        showNotification('Products loading finished');
    });
    productsContainer.addEventListener('load-products-error', (event) => {
        const errorMesage = event.detail;
        showNotification(errorMesage);
    })
    showProductsController(productsContainer);
    sessionController(session)

})