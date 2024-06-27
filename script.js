var headerH = document.getElementById("header-h");
var header = document.getElementById("header");
let allow = true;
window.addEventListener("scroll", function () {
  let y = window.scrollY;
  if (y > 80 && allow) {
    header.style.transition = "0.5s";
    header.style.top = "-180px";
    headerH.classList.add("small");
    // setTimeout(() => {
    //   header.classList.add("stick");
    // }, 1);
    setTimeout(() => {
      header.style.position = "fixed";
      header.style.top = "0px";
      header.classList.remove("stick");
    }, 190);
    allow = false;
  }
  if (y == 0) {
    headerH.classList.remove("small");
    allow = true;
    header.style.position = "absolute";
    header.style.top = "0px";
  }
});

var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");
var closeBtn = document.querySelectorAll(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("show");
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

document
  .getElementById("blog-btn")
  .addEventListener("click", () => [
    document.getElementById("blog-list").classList.toggle("show"),
  ]);

let money = document.getElementById("money");
let m1 = 10;
let m2 = 100;
let m3 = 100;
if (money) {
  const myinterval = setInterval(() => {
    if (m1 < 69) {
      m1++;
    }
    if (m2 < 242) {
      m2 += 2;
    }
    if (m3 < 178) {
      m3++;
    }
    money.innerHTML = m1 + "," + m2 + "," + m3;
    if (m1 >= 69 && m2 >= 242 && m3 >= 178) {
      clearInterval(myinterval);
    }
  }, 50);
}

//Drop Button
var dropBtns = document.querySelectorAll(".drop-btn");
var dropText = document.querySelectorAll(".drop-text");

dropBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    if (dropText[index].classList.contains("show")) {
      dropText[index].classList.remove("show");
      btn.classList.remove("show");
    } else {
      for (let i = 0; i < dropBtns.length; i++) {
        dropText[i].classList.remove("show");
        dropBtns[i].classList.remove("show");
      }
      dropText[index].classList.add("show");
      btn.classList.add("show");
    }
  });
});

//Slide
var swiper = new Swiper(".cubeSwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    432: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: { el: ".swiper-pagination", clickable: true },
});
