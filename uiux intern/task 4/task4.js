const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Toggle floating menu
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
