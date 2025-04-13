export function loaderController(loaderContainer) {

    const show = () => {
      loaderContainer.classList.remove("hidden");
    }
    const hide = () => {
      loaderContainer.classList.add("hidden");
    }
  
    return {show, hide};
  }