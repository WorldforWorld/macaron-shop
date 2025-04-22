export function burgerMenu(burgerSelector, navSelector) {
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
