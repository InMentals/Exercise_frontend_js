import { login } from "./loginModel.js";
import { REGEXP } from "../utils/constants.js";

export async function loginController(form) {

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const user = form.querySelector("#user").value;
        const password = form.querySelector("#password").value;


        //validate email format
        const userRegExp = REGEXP.mail;
        if (!userRegExp.test(user)) {
            const event = new CustomEvent("login-error", {
                detail: "User format is not valid. Must be an email address.",
            });
            form.dispatchEvent(event);
        } else {
            handleLogin(user, password, form);
        }

    });

    const handleLogin = async (user, password, form) => {
        try{
            const event = new CustomEvent("login-started");
            form.dispatchEvent(event);
            const token = await login(user, password);
            localStorage.setItem("token", token);
            setTimeout(() => {
                const event = new CustomEvent("login-finished");
                form.dispatchEvent(event);
                window.location = '/'
              }, 3000);
        }catch(error){
            const event = new CustomEvent("login-error", {
                detail: error.message,
            });
            form.dispatchEvent(event);
        }
    }



}

