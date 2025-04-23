export async function registerController(form) {

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const usserName = form.querySelector("#userName").value;
            const password = form.querySelector("#password").value;
            const email = form.querySelector("#email").value;
            const confirmPassword = form.querySelector("#confirmPassword").value;
            const errors = [];
            

            //validate email format
            const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            if (!emailRegex.test(email)) {
                errors.push("Email format is not valid");
            }

            //check if password and confirm password are the same
            if (password !== confirmPassword) {
                errors.push("Password and confirm password are not the same");
            }

            if (errors.length === 0) {
                //create user
            }else{
                errors.forEach((error) => {
                    const event = new CustomEvent("register-error", {
                        detail: error,
                    });
                    form.dispatchEvent(event);
                });
            }
        });
}

