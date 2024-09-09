// togle class aktif untuk hamburger
const hamburger = document.querySelector(".nav");
//ketika hamburger di kilik
document.querySelector(".hamburger").onclick = (e) => {
  hamburger.classList.toggle("active");
  e.preventDefault();
};
