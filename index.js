const hamburger = document.querySelector(".hamburger-menu");
const closeMobNav = document.querySelector(".nav-close-btn");
const mobNav = document.querySelector(".mobile-navbar");

hamburger.addEventListener("click", () => {
  mobNav.style.width = "60vw";
});

closeMobNav.addEventListener("click", () => {
  mobNav.style.width = null;
});
