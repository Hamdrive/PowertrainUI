const hamburger = document.querySelector(".hamburger-menu");
const closeMobNav = document.querySelector(".nav-close-btn");
const mobNav = document.querySelector(".mobile-navbar");
const mobNavMenu = document.querySelector(".menu");
const menuBtns = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  console.log("click");
  mobNav.style.width = "50vw";
});

closeMobNav.addEventListener("click", () => {
  mobNav.style.width = "0";
});
