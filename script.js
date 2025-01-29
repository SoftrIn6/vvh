// Mobile Menu Toggle
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = () => {
    nav.classList.toggle("showNav");
    const icon = bar.classList.contains("fa-bars") ? "fa-xmark" : "fa-bars";
    bar.setAttribute("class", `fa-solid ${icon}`);
}

// Carousel functionality (kept as is)
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
}
