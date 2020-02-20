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

//*Lazy Load progressive image loading
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