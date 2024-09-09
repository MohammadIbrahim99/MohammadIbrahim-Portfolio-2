// togle class aktif untuk hamburger
const nav = document.querySelector(".nav");
//ketika hamburger di kilik
document.querySelector(".hamburger").onclick = (e) => {
  nav.classList.toggle("active");
  e.preventDefault();
};

//klik diluar hamburger untuk menghilangkan nav

const hm = document.querySelector(".hamburger");
const menu = document.querySelector("#navbar");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }

  if (menu.contains(e.target)) {
    nav.classList.remove("active");
  }
});
