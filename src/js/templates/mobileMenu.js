export function mobileMenu(itemSelectors) {
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
