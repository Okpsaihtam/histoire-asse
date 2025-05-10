// Placeholder for future interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site chargé avec succès !");
});

let currentIndex = 0;

// Carousel functionality
const container = document.querySelector('.carousel-container');
const images = container.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function updateCarousel() {
    container.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

let autoScroll = setInterval(() => {
    index = (index + 1) % images.length;
    updateCarousel();
}, 3000);

container.addEventListener('mouseenter', () => clearInterval(autoScroll));
container.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
        index = (index + 1) % images.length;
        updateCarousel();
    }, 3000);
});

// Initial display
showSlide(currentIndex);

// Automatic slide change
setInterval(() => {
    nextSlide();
}, 5000);
