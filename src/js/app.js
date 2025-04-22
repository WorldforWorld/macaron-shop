document.addEventListener("DOMContentLoaded", () => {
  burgerMenu("burgerMenu", "navMenu");
  mobileMenu(".js-submenu .menu__select");
  document.querySelector(".menu__close").addEventListener("click", () => {
    document.querySelector("#navMenu").classList.remove("open");
  });
});

function mobileMenu(itemSelectors) {
  const menuItems = document.querySelectorAll(itemSelectors);
  if (!menuItems.length) return;
  menuItems.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const menuContent = button.nextElementSibling;
      const isActive = button.classList.contains("active");
      menuItems.forEach((btn) => {
        btn.classList.remove("active");
        btn.nextElementSibling.style.maxHeight = 0;
      });
      if (!isActive) {
        button.classList.add("active");
        menuContent.style.maxHeight = `${menuContent.scrollHeight}px`;
      }
    });
  });
}

function burgerMenu(burgerSelector, navSelector) {
  const burgerMenu = document.getElementById(burgerSelector);
  const body = document.querySelector("body");
  const navMenu = document.getElementById(navSelector);
  if (!burgerMenu || !navMenu || !body) return;
  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("open");
    navMenu.classList.toggle("open");
    body.classList.toggle("js-overflow");
    this.setAttribute("aria-expanded", this.classList.contains("open"));
  });
}
