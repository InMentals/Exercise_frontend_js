export const createProduct = async (name, description, price, image, sell) => {
    const token = localStorage.getItem("token");

      
    const response = await fetch("http://localhost:8000/api/products", {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
        price,
        image,
        sell
      }),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
  
    if (!response.ok) {
      const data = response.json();
      throw new Error("It was not possible to create the product.")
    }
  }