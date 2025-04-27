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