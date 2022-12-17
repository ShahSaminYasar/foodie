const header = document.querySelector("#header");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navlinks = document.querySelector(".navlinks");

// Changing style of header on scroll
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
};

// Opening 'Navlinks' small devices
mobileMenuBtn.addEventListener("click", function () {
  mobileMenuBtn.classList.toggle("menuActive");
  navlinks.classList.toggle("menuActive");
});
