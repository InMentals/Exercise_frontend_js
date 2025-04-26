import { loginController } from "./login/loginController.js"
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
    });

    form.addEventListener('login-finished', () => {
        showNotification("Login successful.", "success");
    });

    form.addEventListener("login-error", (event) => {
        hide();
        submitButton.classList.remove("hidden");
        const errorMessage = event.detail;
        showNotification(errorMessage, "error");
    });

    loginController(form);
});