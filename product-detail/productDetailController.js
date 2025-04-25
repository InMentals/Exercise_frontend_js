import { productDetailModel } from "./productDetailModel.js"
import { buildProductDetailView, buildErrorView } from "./productDetailView.js"

export const productDetailController = async (container, productId) => {

  try {
    const event = new CustomEvent("detail-view-started");
    container.dispatchEvent(event);
    const productDetail = await productDetailModel(productId);
    container.innerHTML = buildProductDetailView(productDetail);
    container.classList.add("product");
  } catch (error) {
    container.innerHTML = buildErrorView();
    const event = new CustomEvent("detail-view-error", {
      detail: error.message,
    });
    container.dispatchEvent(event);
  }finally{
    const event = new CustomEvent("detail-view-finished");
    container.dispatchEvent(event);
  }

}

