import { productDetailController } from "./product-detail/productDetailController.js";
import {notificationsController} from "./notifications/notificationsController.js";
import { loaderController } from "./loader/loaderController.js";
import { sessionController } from "./session/sessionController.js";

document.addEventListener("DOMContentLoaded", () => {

  const searchParams = new URLSearchParams(window.location.search);
  const productId = searchParams.get("id");

  const productContainer = document.querySelector(".detail-container");
  const notificationsContainer = document.querySelector(".notifications-container");
  const loaderContainer = document.querySelector(".loader-container");
  const session = document.querySelector(".session");
  const {showNotification} = notificationsController(notificationsContainer);
  const {show, hide} = loaderController(loaderContainer);

  

  productContainer.addEventListener("detail-view-started", (event) => {
    show();
  });

  productContainer.addEventListener("detail-view-finished", () => {
    hide();
    showNotification("Loading product detail finished", "success");
  });

  productContainer.addEventListener("detail-view-error", (event) => {
      hide();
      const errorMessage = event.detail;
      showNotification(errorMessage, "error");
  });


  productContainer.addEventListener("deletion-started", (event) => {
    show();
  });

  productContainer.addEventListener("deletion-finished", () => {
    showNotification("Product deleted successfuly.", "success");
  });

  productContainer.addEventListener("deletion-error", (event) => {
      hide();
      const errorMessage = event.detail;
      showNotification(errorMessage, "error");
  });


  if (productId) {
    productDetailController(productContainer, productId);
    sessionController(session);
  } else {
    window.location = "/";
  }


});


