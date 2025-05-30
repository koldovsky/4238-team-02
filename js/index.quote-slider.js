(function () {
  let quoteSliderInstance = null;

  class QuoteSlider {
    constructor() {
      this.currentSlide = 0;
      this.slides = [];
      this.dots = [];
      this.autoPlayInterval = null;
      this.autoPlayDelay = 5000;

      this.nextSlide = this.nextSlide.bind(this);
      this.prevSlide = this.prevSlide.bind(this);

      this.init();
    }

    init() {
      this.slides = document.querySelectorAll(".quote-slider__container");
      this.dots = document.querySelectorAll(".quote-slider__dot");

      if (this.slides.length === 0) {
        return;
      }

      this.showSlide(0);
      this.addEventListeners();
      this.startAutoPlay();
    }

    addEventListeners() {
      const prevBtn = document.querySelector(".quote-slider__nav--prev");
      if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
          e.preventDefault();
          this.prevSlide();
        });
      }

      const nextBtn = document.querySelector(".quote-slider__nav--next");
      if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
          e.preventDefault();
          this.nextSlide();
        });
      }

      this.dots.forEach((dot, index) => {
        dot.addEventListener("click", (e) => {
          e.preventDefault();
          this.goToSlide(index);
        });
      });

      const slider = document.querySelector(".quote-slider");
      if (slider) {
        slider.addEventListener("mouseenter", () => {
          this.pauseAutoPlay();
        });

        slider.addEventListener("mouseleave", () => {
          this.startAutoPlay();
        });
      }
    }

    showSlide(index) {
      this.slides.forEach((slide, i) => {
        slide.classList.remove("active");
        slide.style.display = "none";
        slide.style.opacity = "0";
      });

      this.dots.forEach((dot) => {
        dot.classList.remove("quote-slider__dot--active");
      });

      if (this.slides[index]) {
        this.slides[index].style.display = "block";
        this.slides[index].offsetHeight;
        this.slides[index].style.opacity = "1";
        this.slides[index].classList.add("active");
      }

      if (this.dots[index]) {
        this.dots[index].classList.add("quote-slider__dot--active");
      }

      this.currentSlide = index;
    }

    nextSlide() {
      const nextIndex = (this.currentSlide + 1) % this.slides.length;
      this.goToSlide(nextIndex);
    }

    prevSlide() {
      const prevIndex =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.goToSlide(prevIndex);
    }

    goToSlide(index) {
      if (index >= 0 && index < this.slides.length) {
        this.showSlide(index);
        this.restartAutoPlay();
      }
    }

    startAutoPlay() {
      this.pauseAutoPlay();
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayDelay);
    }

    pauseAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    }

    restartAutoPlay() {
      this.startAutoPlay();
    }
  }

  function initQuoteSlider() {
    const quoteSlider = document.querySelector(".quote-slider");
    if (quoteSlider && !quoteSliderInstance) {
      quoteSliderInstance = new QuoteSlider();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuoteSlider);
  } else {
    initQuoteSlider();
  }

  document.body.addEventListener("htmx:afterOnLoad", initQuoteSlider);
})();
