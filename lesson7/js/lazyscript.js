//hamburger menu class
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// Return current year in numeric form
const options = {year: 'numeric'};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', options);

/*Date and time on which the document was last modified
document.getElementById('currentdate').textContent = document.lastModified;*/

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

//*Lazy Load. progressive image loading
let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0.30,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });

    }, imgOptions);


    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

//Banner
function showBanner() {
    if (weekday == 'Friday') {
        document.getElementsByClassName("hidebanner")[0].classList.toggle("hidebanner");
    }
}