const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 
    mobileMenu.style.display === "flex" ? "none" : "flex";
});
