export async function productDetailModel(productId) {

    const response = await fetch(`http://localhost:8000/api/products/${productId}?_expand=user`);
  
    if (!response.ok) {
      throw new Error("Product not available")
    }
  
    const productDetail = await response.json();
  
    return productDetail;
  }
  