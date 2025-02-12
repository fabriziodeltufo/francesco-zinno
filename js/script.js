// HAMBURGER MENU TOGGLE
let hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", function () {
  document.body.classList.toggle("menu-open");
});

// SCROLLING MENU TO ID
let links = document.querySelectorAll(".header__menu li a");
console.log(links);

links.forEach((link, i) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let selector = this.getAttribute("href");
    let selectorElement = document.querySelectorAll(selector);
    document.body.classList.toggle("menu-open");

    window.scroll({
      top: selectorElement[0].offsetTop,
      behavior: "smooth",
    });
  });
});

// SCROLLING BUTTON TO ID
let buttons = document.querySelectorAll(".button");

buttons.forEach((button, i) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    let selector = this.getAttribute("href");
    let selectorElement = document.querySelectorAll(selector);
    // document.body.classList.toggle('menu-open');

    window.scroll({
      top: selectorElement[0].offsetTop,
      behavior: "smooth",
    });
  });
});

// SCROLL TU TOP
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
