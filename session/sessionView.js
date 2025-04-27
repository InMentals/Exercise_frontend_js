export const buildUnauthorizedSession = () => {
    return `
      <li><a class="button" href="./login.html">Login</a></li>
      <li><a class="button" href="./register.html">Signup</a></li>
    `;
  }
  
  export const buildAuthorizedSession = (user) => {
    const location = window.location.pathname.split("/").pop();
    console.log("location '"+location+"'");
    let sessionHTML = `<li class="userName" >${user.username}</li>`;
    if (location === "index.html"){
      sessionHTML += `
        <li><a class="button"href="./create-product.html">Create Product</a></li>
        <li><button class="logout button">Logout</button></li>
      `;
      console.log(sessionHTML);
    }
    return sessionHTML;
  }
  