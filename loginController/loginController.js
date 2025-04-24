import { login } from "./loginModel.js";

export async function loginController(form) {

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const user = form.querySelector("#user").value;
        const password = form.querySelector("#password").value;


        //validate email format
        const userRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
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