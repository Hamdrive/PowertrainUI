const hamburger_mobile = document.getElementsByClassName("hamburger")[1];
const close_sidemenu = document.getElementsByClassName(
  "mobile-sidebar-close-btn"
)[0];
const sidemenu = document.getElementsByClassName("mobile-sidebar")[0];

hamburger_mobile.addEventListener("click", () => {
  sidemenu.style.width = "50%";
  sidemenu.style.overflow = "auto";
});

close_sidemenu.addEventListener("click", () => {
  sidemenu.style.width = "0";
  sidemenu.style.overflow = "hidden";
});
