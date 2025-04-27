import { buildAuthorizedSession, buildUnauthorizedSession } from "./sessionView.js";
import { getLoggedInUserInfo } from "./sessionModel.js";

export const sessionController = async (container) => {


  const handleBuildAuthorizedSession =  async (container) => {
    try {
      const eventStart = new CustomEvent("session-started", {
        detail: "Login started.",
      });
      container.dispatchEvent(eventStart);
      const user = await getLoggedInUserInfo();
      container.innerHTML =  buildAuthorizedSession(user);
      const eventFinish = new CustomEvent("session-finished", {
        detail: "Login succesful.",
      });
      container.dispatchEvent(eventFinish);
    } catch (error) {
      const eventError = new CustomEvent("session-error", {
        detail: "Login failed.",
      });
      container.dispatchEvent(eventError);
      container.innerHTML = buildUnauthorizedSession()
    }
  }


  const isUserLoggedIn = Boolean(localStorage.getItem("token"));
   if (isUserLoggedIn) {
    await handleBuildAuthorizedSession(container);
    const logoutButton = container.querySelector('.logout');
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("token")
      window.location = "/";
    });
  } else {
    container.innerHTML = buildUnauthorizedSession()
  }


}