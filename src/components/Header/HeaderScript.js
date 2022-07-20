const headerScript = () => {
  // mobile-menu
  const subMobileItems = document.querySelector(".sub-mobile-items");
  const eventsMobileButton = document.querySelectorAll(".mobile-menu-item")[1];
  const svgMobileArrow = eventsMobileButton.querySelector("svg");

//   eventsMobileButton.addEventListener("click", () => {
//     subMobileItems.classList.toggle("sub-mobile-items-none");
//     svgMobileArrow.classList.add("mobile-menu-svg-rotate");
//   });

  const burgerMenu = document.querySelector(".burger-mobile");
  const scrollMobileMenu = document.querySelector(".scroll-mobile-menu");
  const menuExit = document.querySelector(".menu-exit");

  burgerMenu.addEventListener("click", () => {
    scrollMobileMenu.classList.add("scroll-mobile-menu-visibility");
  });

  menuExit.addEventListener("click", () => {
    scrollMobileMenu.classList.remove("scroll-mobile-menu-visibility");
  });

  
  const masEventsMobileButton = document.querySelectorAll(
    ".mobile-menu-item a"
  );
  for (let item of masEventsMobileButton) {
    // let linkItem = item.querySelector("a")
    item.addEventListener("click", () => {
      scrollMobileMenu.classList.remove("scroll-mobile-menu-visibility");
    });
  }
};

export default headerScript;
