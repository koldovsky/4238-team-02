function init() {
    import('./about.js');
    import('./global.footer.js');
    import('./clock-container.js');
    import('./contact.js');
    import('./index.about-us-carusel.js')
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});