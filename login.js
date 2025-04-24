
import { loginController } from "./loginController/loginController.js"
import { loaderController } from "./loader/loaderController.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const loaderContainer = document.querySelector(".loader-container");
    const submitButton = document.querySelector(".submit");
    const {show, hide} = loaderController(loaderContainer);

    form.addEventListener('login-started', () => {
        show();
        submitButton.classList.add("hidden");
    });

    form.addEventListener("login-error", (event) => {
        hide();
        submitButton.classList.remove("hidden");
    });


    loginController(form);
});