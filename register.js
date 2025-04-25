import { registerController } from "./register/registerController.js";
import {notificationsController} from "./notifications/notificationsController.js";
import { loaderController } from "./loader/loaderController.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    const notificationsContainer = document.querySelector(".notifications-container");
    const loaderContainer = document.querySelector(".loader-container");
    const submitButton = document.querySelector(".submit");
    const {showNotification} = notificationsController(notificationsContainer);
    const {show, hide} = loaderController(loaderContainer);
    

    form.addEventListener("registration-started", () => {
        show();
        submitButton.classList.add("hidden");
    });

    form.addEventListener("registration-error", (event) => {
        hide();
        submitButton.classList.remove("hidden");
        const errorMessage = event.detail;
        showNotification(errorMessage);
    });

    registerController(form);

    //TODO: enseñar mensaje con "registration successfull"

});

