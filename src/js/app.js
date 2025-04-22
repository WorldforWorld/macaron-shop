import { burgerMenu } from "./templates/burgerMenu.js";
import { mobileMenu } from "./templates/mobileMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  burgerMenu("burgerMenu", "navMenu");
  mobileMenu(".js-submenu .menu__select");
  document.querySelector(".menu__close").addEventListener("click", () => {
    document.querySelector("#navMenu").classList.remove("open");
  });
});
