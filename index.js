import { showAdsController } from "./show-ads/showAdsController.js";
import { loaderController } from "./loader/loaderController.js";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".adv-container");
    const loader = document.querySelector(".loader");
    const {show, hide} = loaderController(loader);

    container.addEventListener('load-ads-started', () => {
        show();
    })
    container.addEventListener('load-ads-finished', () => {
        hide();
    })

    showAdsController(container);

})