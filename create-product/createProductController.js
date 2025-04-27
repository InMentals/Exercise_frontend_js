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
            const eventStart = new CustomEvent("creation-started");
            form.dispatchEvent(eventStart);
            await createProduct(name, description, price, image, sell);
            const eventFinish = new CustomEvent("creation-finished");
            form.dispatchEvent(eventFinish);
            setTimeout(() => {
                window.location = '/';
            }, 3000);
        } catch (error) {
            const eventError = new CustomEvent("creation-error", {
                detail: error.message,
            });
            form.dispatchEvent(eventError);
        }
    }

}