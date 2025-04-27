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
        handleCreateProduct(name, description, price, image, sell, form);
    });


    const handleCreateProduct = async (name, description, price, image, sell, form) => {
        try {
            const event = new CustomEvent("creation-started");
            form.dispatchEvent(event);
            await createProduct(name, description, price, image, sell);
            setTimeout(() => {
                const event = new CustomEvent("creation-finished");
                form.dispatchEvent(event);
                window.location = '/';
            }, 3000);
        } catch (error) {
            const event = new CustomEvent("creation-error", {
                detail: error.message,
            });
            form.dispatchEvent(event);
        }
    }

}