import { registerController } from "./register/registerController.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    registerController(form);
    }  
);