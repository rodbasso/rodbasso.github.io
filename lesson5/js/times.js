//hamburger menu class
function toggleMenu() {document.getElementsByClassName("navigation")[0].classList.toggle("responsive");}

// Return current year in numeric form
const options = {year:'numeric'};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', options);

// Return the date and time on which the document was last modified. format "Monday, 01 Jan 2020"
var currentDate = new Date();
var weekdayOption = { weekday: 'long' };
var weekday = currentDate.toLocaleDateString('en-US', weekdayOption);
var monthOption = { month: 'long' };
var month = currentDate.toLocaleDateString('en-US', monthOption);
var day = currentDate.getDate();
var year = currentDate.getFullYear();

document.getElementById('currentdate').textContent = weekday + ", " + day + " " + month + " " + year;

//Banner
function showBanner() {
    if (weekday == 'Saturday') {
      document.getElementsByClassName("hidebanner")[0].classList.toggle("hidebanner");
    }
  }
