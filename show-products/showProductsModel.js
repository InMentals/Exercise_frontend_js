export async function getProducts() {
  const response = await fetch('http://localhost:8000/api/products');
  const products = await response.json();
  return products;
}