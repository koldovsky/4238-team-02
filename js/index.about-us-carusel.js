const slides = [
    '<div><img src='img/about-us.png'></div>'
    '<div><img src='img/about-us.png'></div>'
    '<div><img src='img/about-us.png'></div>'
    '<div><img src='img/about-us.png'></div>'
    '<div><img src='img/about-us.png'></div>'
    ];

let currentIndex = 0;

function renderSlides() {
    const carousel = document.querySelector('.about-us-carusel__slides');
    carousel.innerHTML = slides[currentIndex];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    renderSlides();
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

