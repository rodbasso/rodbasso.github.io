//hamburger menu class
function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// Return current year in numeric form
const options = {
  year: 'numeric'
};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', options);

