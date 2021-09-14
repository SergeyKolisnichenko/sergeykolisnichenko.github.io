function burgerMenu() {
  let burger = document.querySelector(".hamburger");
  let menuList = document.querySelector(".menu-list");
  let menuItem = document.querySelectorAll(".menu-item");

  burger.addEventListener("click", function () {
    burger.classList.toggle("hamburger-active");
    menuList.classList.toggle("menu-list-active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", function () {
      burger.classList.toggle("hamburger-active");
      menuList.classList.toggle("menu-list-active");
    });
  });
}

burgerMenu();
