import { registerController } from "./register/registerController.js";
import {notificationsController} from "./notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    const notificationsContainer = document.querySelector("#notifications-container");
    const {showNotification} = notificationsController(notificationsContainer);
    

    form.addEventListener("register-error", (event) => {
        const errorMessage = event.detail;
        showNotification(errorMessage);
    });

    registerController(form);

});

