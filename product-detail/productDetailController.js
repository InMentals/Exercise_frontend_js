import { productDetailModel } from "./productDetailModel.js"
import { buildProductDetailView } from "./productDetailView.js"

export const productDetailController = async (productContainer, productId) => {

  try {
    const productDetail = await productDetailModel(productId)
    productContainer.innerHTML = buildProductDetailView(productDetail)
    productContainer.classList.add("product");
  } catch (error) {
    alert(error.message)
  }

}
