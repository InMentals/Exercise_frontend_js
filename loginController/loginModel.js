export const login = async (user, password) => {
    const response = await fetch('http://localhost:8000/auth/login', 
        {
        method: 'POST', 
        body: JSON.stringify({username: user, password}), 
        headers: {'Content-Type': 'application/json'}
        }
    );
    if (!response.ok) {
        throw new Error("Invalid username or password. Please try again.");
    }
    const { accessToken } = await response.json();
    return accessToken;
}