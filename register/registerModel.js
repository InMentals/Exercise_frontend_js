export const registerUser = async (user, password) => {
    const response = await fetch('http://localhost:8000/auth/register', 
        {
        method: 'POST', 
        body: JSON.stringify({username: user, password}), 
        headers: {'Content-Type': 'application/json'}
        }
    );
    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
    }
  }