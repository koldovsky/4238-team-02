function init() {
  import("./global.header-nav.burger-menu.js");
  import("./about.js");
  import("./global.footer.js");
  import("./clock-container.js");
  import("./contact.js");
  import("./index.about-us-carusel.js");
  import("./our-services.js");
  import("./index.quote-slider.js");
  import("./index.moving-tips.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
