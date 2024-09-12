// togle class aktif untuk hamburger
const hamMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");
//ketika hamburger di kilik
document.querySelector(".hamburger-menu").onclick = (e) => {
  nav.classList.toggle("active");
  hamMenu.classList.toggle("active");
  e.preventDefault();
};

//klik diluar hamburger untuk menghilangkan nav

// const hm = document.querySelector(".hamburger-menu");
// const menu = document.querySelector("#navbar");

// document.addEventListener("click", function (e) {
//   if (!hm.contains(e.target) && !nav.contains(e.target)) {
//     nav.classList.remove("active");
//   }

//   if (menu.contains(e.target)) {
//     nav.classList.remove("active");
//   }
// });
