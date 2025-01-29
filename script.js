document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById("bar");
    const nav = document.getElementById("nav");
    const mobileMenu = document.getElementById("mobileMenu");

    bar.addEventListener("click", function (e) {
        // Toggle the menu visibility
        mobileMenu.classList.toggle("showNav");  // Use class instead of inline styles

        // Toggle the icon
        const icon = e.target.getAttribute("class");
        if (icon === "fa-solid fa-bars") {
            e.target.setAttribute("class", "fa-solid fa-xmark");
        } else {
            e.target.setAttribute("class", "fa-solid fa-bars");
        }
    });
});

// carousel
const carouselContainer = document.querySelector(".carouselContainer");
const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
const allEachCarousel = document.querySelectorAll(".eachCarousel");
const allIndicator = document.querySelectorAll(".indicator");

const slideCarousel = (index) => {
    for(let x = 0; x<allEachCarousel.length;x++){
        if(x === index){
            allEachCarousel[x].classList.add("eachCarouselBorder")
            allIndicator[x].classList.add("activeIndicator")
        }else{
            allEachCarousel[x].classList.remove("eachCarouselBorder")
            allIndicator[x].classList.remove("activeIndicator")
        }
    }
   carouselContainer.scrollLeft = (index * (eachCarousel + 10))
   console.log(carouselContainer.scrollLeft)
}
