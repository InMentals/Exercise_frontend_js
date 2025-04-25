import { createProduct } from "./createProductModel.js";

export function createProductController(form) {
    

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = form.querySelector("#name").value;
        const description = form.querySelector("#description").value;
        const price = form.querySelector("#price").value;
        const image = form.querySelector("#image").value;
        const type = form.querySelector('input[name="type"]:checked');
        let sell = true;
        if (type.value === "buy") sell = false;
        
        try {
            await createProduct(name, description, price, image, sell);
            setTimeout(() => {
              window.location = '/';
            }, 3000);
        } catch (error) {
            alert(error.message);
        }
    });
}