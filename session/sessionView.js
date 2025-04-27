export const buildUnauthorizedSession = () => {
    return `
      <li><a class="button" href="./login.html">Login</a></li>
      <li><a class="button" href="./register.html">Signup</a></li>
    `;
  }
  
  export const buildAuthorizedSession = (user) => {
    return `
      <li class="userName" >${user.username}</li>
      <li><a class="button"href="./create-product.html">Create Product</a></li>
      <li><button class="logout button">Logout</button></li>
    `;
  }
  