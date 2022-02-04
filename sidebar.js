const compMenu = document.querySelector(".mobile-menu");
const compNav = document.querySelector(".aside-nav");
const chevrons = document.querySelector(".mobile-menu-arrow");

let isMobCompSidebarOpen = false;

compMenu.addEventListener("click", () => {
  if (!isMobCompSidebarOpen) {
    compNav.style.height = "15rem";
    compNav.style.overflowY = "scroll";
    chevrons.style.transform = "rotate(180deg)";
    chevrons.style.marginLeft = "auto";
    isMobCompSidebarOpen = !isMobCompSidebarOpen;
  } else {
    compNav.style.height = null;
    compNav.style.overflowY = null;
    chevrons.style.marginLeft = null;
    chevrons.style.transform = null;
    isMobCompSidebarOpen = !isMobCompSidebarOpen;
  }
});
