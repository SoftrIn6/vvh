document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById("bar");
    const mobileMenu = document.getElementById("mobileMenu");

    bar.addEventListener("click", function (e) {
        // Toggle the menu visibility
        mobileMenu.classList.toggle("showNav");  // Show/Hide mobile menu

        // Toggle the icon by switching the image
        const iconSrc = e.target.getAttribute("src");
        if (iconSrc === "https://upload.wikimedia.org/wikipedia/commons/c/c4/Font_Awesome_5_solid_bars.svg") {
            e.target.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/7a/Font_Awesome_5_solid_xmark.svg");
        } else {
            e.target.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/c/c4/Font_Awesome_5_solid_bars.svg");
        }
    });
});

// Carousel
const carouselContainer = document.querySelector(".carouselContainer");
const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
const allEachCarousel = document.querySelectorAll(".eachCarousel");
const allIndicator = document.querySelectorAll(".indicator");

const slideCarousel = (index) => {
    for (let x = 0; x < allEachCarousel.length; x++) {
        if (x === index) {
            allEachCarousel[x].classList.add("eachCarouselBorder");
            allIndicator[x].classList.add("activeIndicator");
        } else {
            allEachCarousel[x].classList.remove("eachCarouselBorder");
            allIndicator[x].classList.remove("activeIndicator");
        }
    }
    carouselContainer.scrollLeft = (index * (eachCarousel + 10));
    console.log(carouselContainer.scrollLeft);
};
