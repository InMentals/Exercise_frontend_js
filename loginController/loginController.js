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
            alert('User format is not valid. Must be an email address.')
        } else {
            handleLogin(user, password)
        }

        async function handleLogin(user, password) {
            const token = await login(user, password);
            localStorage.setItem("token", token)
            setTimeout(() => {
                window.location = '/'
              }, 5000);
        }

    });




}