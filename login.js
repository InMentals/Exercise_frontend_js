
import { loginController } from "./loginController/loginController.js"

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    loginController(form);
});