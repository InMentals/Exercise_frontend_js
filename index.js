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



    productsContainer.addEventListener("load-products-started", () => {
        show();
    });
    productsContainer.addEventListener("load-products-finished", () => {
        hide();
        showNotification("Loading products finished.", "success");
    });
    productsContainer.addEventListener("load-products-error", (event) => {
        const errorMesage = event.detail;
        showNotification(errorMesage, "error");
    });


    session.addEventListener("session-started", (event) => {
        show();
    });

    session.addEventListener("session-finished", (event) => {
        showNotification(event.detail, "success");
    });

    session.addEventListener("session-error", (event) => {
        showNotification(event.detail, "error");
    });
    



    showProductsController(productsContainer);
    sessionController(session);

})