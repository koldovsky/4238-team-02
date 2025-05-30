const emblaNode = document.querySelector('.embla');
const viewportNode = emblaNode.querySelector('.embla__viewport');

const embla = EmblaCarousel(viewportNode, {
  loop: true,
  align: 'start',
  slidesToScroll: 1,
  speed: 10,
});

const btnPrev = emblaNode.querySelector('.embla__prev');
const btnNext = emblaNode.querySelector('.embla__next');

btnPrev.addEventListener('click', embla.scrollPrev);
btnNext.addEventListener('click', embla.scrollNext);

