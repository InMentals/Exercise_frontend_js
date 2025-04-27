import { createProductController } from "./create-product/createProductController.js";
import {notificationsController} from "./notifications/notificationsController.js";
import { loaderController } from "./loader/loaderController.js";

document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
    if (!token) window.location = "/login.html";

    const form = document.querySelector("form");
    const notificationsContainer = document.querySelector(".notifications-container");
    const loaderContainer = document.querySelector(".loader-container");
    const submitButton = document.querySelector(".submit");
    const {showNotification} = notificationsController(notificationsContainer);
    const {show, hide} = loaderController(loaderContainer);


    form.addEventListener("creation-started", () => {
        show();
        submitButton.classList.add("hidden");
    });

    form.addEventListener("creation-finished", () => {
        showNotification("Product created successfully.", "success");
    });

    form.addEventListener("creation-error", (event) => {
        hide();
        submitButton.classList.remove("hidden");
        const errorMessage = event.detail;
        showNotification(errorMessage);
    });


    createProductController(form);
});

//TODO: reduce textarea heigh