import { productDetailModel, getLoggedInUserInfo, deleteProduct } from "./productDetailModel.js"
import { buildProductDetailView, buildErrorView, buildDeleteProductButton } from "./productDetailView.js"

export const productDetailController = async (container, productId) => {

  const showDeleteProductButton = (productId) => {
    const deleteButton = buildDeleteProductButton()
    container.children[0].appendChild(deleteButton)
    deleteButton.addEventListener("click", () => {
      if (confirm("Do you really want to delete this product?")) {
        deleteProduct(productId);
      }
    });
  }

  try {
    const event = new CustomEvent("detail-view-started");
    container.dispatchEvent(event);
    const productDetail = await productDetailModel(productId);
    container.innerHTML = buildProductDetailView(productDetail);

    if (localStorage.getItem('token')){
      const user = await getLoggedInUserInfo();
      if (user.id === productDetail.userId) {
        showDeleteProductButton(productId)
      }
    }
    
  } catch (error) {
    container.innerHTML = buildErrorView();
    container.classList.add("error");
    const event = new CustomEvent("detail-view-error", {
      detail: error.message,
    });
    container.dispatchEvent(event);
  }finally{
    const event = new CustomEvent("detail-view-finished");
    container.dispatchEvent(event);
  }

}

