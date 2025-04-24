import { registerUser } from "./registerModel.js";
import { REGEXP } from "../utils/constants.js";

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
                const event = new CustomEvent("registration-started");
                form.dispatchEvent(event);
                await registerUser(user, password);
                setTimeout(() => {
                    window.location = '/'
                  }, 5000);
            }catch(error){
                const event = new CustomEvent("registration-error", {
                    detail: error,
                });
                form.dispatchEvent(event);
            }
        }
}

