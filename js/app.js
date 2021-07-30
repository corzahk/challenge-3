addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector(".btn_menu");
  if (btn_menu) {
    btn_menu.addEventListener("click", () => {
      const nav_items = document.querySelector(".nav-items");
      const nav_img = document.querySelector(".img-container");
      nav_items.classList.toggle("show");
      nav_img.classList.toggle("backg");
    });
  }
});
