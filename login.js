
import { loginController } from "./loginController/loginController.js"
import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const loaderContainer = document.querySelector(".loader-container");
    const submitButton = document.querySelector(".submit");
    const notificationsContainer = document.querySelector(".notifications-container");
    const {show, hide} = loaderController(loaderContainer);
    const {showNotification} = notificationsController(notificationsContainer);

    form.addEventListener('login-started', () => {
        show();
        submitButton.classList.add("hidden");
    });

    form.addEventListener("login-error", (event) => {
        hide();
        submitButton.classList.remove("hidden");
        const errorMessage = event.detail;
        showNotification(errorMessage);
    });

    loginController(form);
});