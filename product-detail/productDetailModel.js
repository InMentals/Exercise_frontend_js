export async function productDetailModel(productId) {
    const response = await fetch(`http://localhost:8000/api/products/${productId}?_expand=user`);
    if (!response.ok) {
      throw new Error("Product not available")
    }
    const productDetail = await response.json();
    return productDetail;
}
  
export async function getLoggedInUserInfo() {
  const token = localStorage.getItem('token');
 
  const response = await fetch(`http://localhost:8000/auth/me`, {
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error("User not found");
  }

  const user = await response.json();
  return user;
}


 export async function deleteProduct(productId) {
  const token = localStorage.getItem('token');
  const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error("Product not available");
  }
}