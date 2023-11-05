// navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  //jadi nilai fixednav ini pasti 0 y nya
  const fixedNav = header.offsetTop;
  // mengambil id to-top
  const toTop = document.querySelector("#to-top");
  //ketika window scroll lebih besar dari fixedNAv kalau ada selisih maka tambah kelas navbar-fixed
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Hamburger dan nav
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  //jadi kalau ada kelas nya akan di hapus kalau ga ada maka tambah
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});