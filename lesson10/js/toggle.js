// Toggle the hamburger menu class name upon click
function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// Return current date in the format "Wednesday, 20 May 2020"
var currentDate = new Date();
var weekdayOption = {
  weekday: 'long'
};
var weekday = currentDate.toLocaleDateString('en-US', weekdayOption);
var monthOption = {
  month: 'long'
};
var month = currentDate.toLocaleDateString('en-US', monthOption);
var day = currentDate.getDate();
var year = currentDate.getFullYear();

document.getElementById('currentdate').textContent = weekday + ", " + day + " " + month + " " + year;

//Banner
function showBanner() {
  if (weekday == 'Friday') {
    document.getElementsByClassName("hidebanner")[0].classList.toggle("hidebanner");
  }
}