"use strict";

const navBg = document.querySelector(".header__bg");
const navMenuBar = document.querySelector(".navbar-collapse");
const navBtn = document.querySelector(".navbar-toggler");

navBtn.addEventListener("click", () => {
  navBg.classList.toggle("active");
});

function resetMenu() {
  if (window.innerWidth >= 900) {
    navBg.classList.remove("active");
    navMenuBar.classList.remove("show");
    navBtn.classList.add("collapsed");
  }
}

window.addEventListener("resize", resetMenu);
