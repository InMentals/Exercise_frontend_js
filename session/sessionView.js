export const buildUnauthorizedSession = () => {
    return `
      <li><a class="button" href="./login.html">Login</a></li>
      <li><a class="button" href="./register.html">Signup</a></li>
    `;
  }
  
  export const buildAuthorizedSession = (user) => {
    const location = window.location.pathname.split("/").pop();
    let sessionHTML = `<li class="userName" >${user.username}</li>`;
    if (location === "index.html" || location === ""){
      sessionHTML += `
        <li><a class="button"href="./create-product.html">Create Product</a></li>
      `;
    }
    sessionHTML += `<li><button class="logout button">Logout</button></li>`;
    return sessionHTML;
  }
  