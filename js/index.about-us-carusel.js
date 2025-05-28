const slides = [
    '<div><img src='img/about-us.png'></div>'
    '<div><img src='img/about-us.png'></div>'
    '<div><img src='img/about-us.png'></div>'
    '<div><img src='img/about-us.png'></div>'
    '<div><img src='img/about-us.png'></div>'
    ];

let currentIndex = 0;

function renderSlides() {
    const slidesContainer = document.querySelector('.about-us-carusel__slides');
  slidesContainer.innerHTML = slides[currentIndex];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIndex = (currentIndex + 1) % slides.length;
    slidesContainer.innerHTML += slides[secondSlideIndex];
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlideIndex = (currentIndex + 2) % slides.length;
      slidesContainer.innerHTML += slides[thirdSlideIndex];
    }
  }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    renderSlides();
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  renderSlides();
}

// setInterval(nextSlide, 3000);
renderSlides();

const btnNext = document.querySelector(".product-carousel__button--next");
const btnPrev = document.querySelector(".product-carousel__button--prev");

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlides);