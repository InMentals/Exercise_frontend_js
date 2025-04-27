import { registerUser } from "./registerModel.js";
import { REGEXP } from "../utils/constants.js";
import { login } from "../login/loginModel.js";

export async function registerController(form) {

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const user = form.querySelector("#user").value;
            const password = form.querySelector("#password").value;
            const confirmPassword = form.querySelector("#confirmPassword").value;
            const errors = [];
            

            //validate email format
            const userRegExp = REGEXP.mail;
            if (!userRegExp.test(user)) {
                errors.push("User format is not valid. Must be an email address.");
            }

            //check if password and confirm password are the same
            if (password !== confirmPassword) {
                errors.push("Password and confirm password are not the same.");
            }

            if (errors.length === 0) {
                handleRegisterUser(user, password, form);
            }else{
                errors.forEach((error) => {
                    const event = new CustomEvent("registration-error", {
                        detail: error,
                    });
                    form.dispatchEvent(event);
                });
            }
        });

        const handleRegisterUser = async (user, password, form) => {
            try{
                const eventStart = new CustomEvent("registration-started");
                form.dispatchEvent(eventStart);
                await registerUser(user, password);
                const eventFinish = new CustomEvent("registration-finished");
                form.dispatchEvent(eventFinish);
                const token = await login(user, password);
                localStorage.setItem("token", token);
                setTimeout(() => {
                    window.location = '/'
                }, 3000);
            }catch(error){
                const eventError = new CustomEvent("registration-error", {
                    detail: error.message,
                });
                form.dispatchEvent(eventError);
            }
        }
}

