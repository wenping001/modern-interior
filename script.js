const hamburger = document.getElementById("toggle");
const navlist = document.getElementById("navlist");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navlist.classList.toggle("active");
});
