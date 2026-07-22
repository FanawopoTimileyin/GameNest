const slides = document.querySelectorAll(".slide");

let current = 0;
let autoSlide;

// Show a specific slide
function showSlide(index) {
slides.forEach((slide) => {
slide.classList.remove("active");
});

slides[index].classList.add("active");


}

// Next slide
function nextSlide() {
current++;

if (current >= slides.length) {
    current = 0;
}

showSlide(current);


}

// Previous slide
function prevSlide() {
current--;

if (current < 0) {
    current = slides.length - 1;
}

showSlide(current);


}

// Start automatic slideshow
function startAutoSlide() {
autoSlide = setInterval(nextSlide, 4000); // Changes every 4 seconds
}

// Restart timer after manual click
function resetAutoSlide() {
clearInterval(autoSlide);
startAutoSlide();
}

// Next button
document.getElementById("next").addEventListener("click", () => {
nextSlide();
resetAutoSlide();
});

// Previous button
document.getElementById("prev").addEventListener("click", () => {
prevSlide();
resetAutoSlide();
});

// Start the slideshow when the page loads
startAutoSlide();

const upcomingSlider = document.querySelector(".upcoming-slider");
const upcomingCards = document.querySelectorAll(".upcoming-slider .ctn-box");

let currentIndex = 0;

function getVisibleCards() {

    if (window.innerWidth <= 768) {
        return 1;
    }

    if (window.innerWidth <= 991) {
        return 2;
    }

    return 3;
}

function getGap() {

    if (window.innerWidth <= 768) {
        return 20;
    }

    if (window.innerWidth <= 991) {
        return 25;
    }

    return 40;
}

function moveUpcomingSlider() {

    const cardWidth = upcomingCards[0].offsetWidth;
    const gap = getGap();

    upcomingSlider.style.transform =
        `translateX(-${currentIndex * (cardWidth + gap)}px)`;

}

document.getElementById("up-next").addEventListener("click", () => {

    const visibleCards = getVisibleCards();

    if (currentIndex < upcomingCards.length - visibleCards) {

        currentIndex++;

        moveUpcomingSlider();

    }

});

document.getElementById("up-prev").addEventListener("click", () => {

    if (currentIndex > 0) {

        currentIndex--;

        moveUpcomingSlider();

    }

});

window.addEventListener("resize", () => {

    const visibleCards = getVisibleCards();

    if (currentIndex > upcomingCards.length - visibleCards) {

        currentIndex = upcomingCards.length - visibleCards;

        if (currentIndex < 0) currentIndex = 0;

    }

    moveUpcomingSlider();

});

moveUpcomingSlider();

const releaseDate = new Date("September 15, 2026 00:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = releaseDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){

        clearInterval(timer);

        document.querySelector(".countdown").innerHTML =
        "<h2>NOW AVAILABLE!</h2>";

    }

},1000);

const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML =
        navLinks.classList.contains("active")
        ? "✕"
        : "☰";

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});
const linkBoxes = document.querySelectorAll(".link-box");

linkBoxes.forEach(box => {

    const title = box.querySelector(".left");

    title.addEventListener("click", () => {

        linkBoxes.forEach(item => {

            if(item !== box){
                item.classList.remove("active");
            }

        });

        box.classList.toggle("active");

    });

});

document.querySelectorAll(".link-box ul a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = "☰";

        linkBoxes.forEach(box => {
            box.classList.remove("active");
        });

    });

});