const contacts = [
    {
        id: 1,
        map: "https://www.google.com/maps?q=205+E+76th+St,+New+York,+NY+10021&output=embed",
        title: "New York Office",
        address: "205 E 76th St, New York, NY 10021, United States",
        phone: "+1 (234) 567 89 00",
        email: "easymove@email.com"
    },
    {
        id: 2,
        map: "https://www.google.com/maps?q=22100+Princeton+St,+Hayward,+CA+94541&output=embed",
        title: "California Office",
        address: "22100 Princeton St, Hayward, CA 94541, United States",
        phone: "+1 (234) 567 89 01",
        email: "easymove.california@email.com"
    },
    {
        id: 3,
        map: "https://www.google.com/maps?q=28+State+St+37th+floor,+Boston,+MA+02109&output=embed",
        title: "Boston Office",
        address: "28 State St 37th floor, Boston, MA 02109, United",
        phone: "+1 (234) 567 55 00",
        email: "easymove.boston@email.com"
    },
    {
        id: 4,
        map: "https://www.google.com/maps?q=205+E+76th+St,+New+York,+NY+10021&output=embed",
        title: "New York Office",
        address: "205 E 76th St, New York, NY 10021, United States",
        phone: "+1 (234) 567 89 00",
        email: "easymove@email.com"
    },
        {
        id: 5,
        map: "https://www.google.com/maps?q=205+E+76th+St,+New+York,+NY+10021&output=embed",
        title: "Boston Office",
        address: "28 State St 37th floor, Boston, MA 02109, United",
        phone: "+1 (234) 567 55 00",
        email: "easymove.boston@email.com"
    }
];

function renderContacts(contacts) {
    let contactsHTML = [];
    for (const contact of contacts) {
        contactsHTML.push(`
            <div class="contact-card embla__slide">
                <iframe class="contact-card__map" src="${contact.map}" loading="lazy"></iframe>
                <div class="contact-card__title">${contact.title}</div>
                <div class="contact-card__info">
                    ${contact.address}<br>
                    ${contact.phone}<br>
                    <a href="mailto:${contact.email}">${contact.email}</a>
                </div>
            </div>
        `);
    }

    const contactsContainer = document.querySelector(".contacts__list");
    if (contactsContainer) {
        contactsContainer.innerHTML = contactsHTML.join("");
    } else {
        console.error("Element .contacts__list not found in the DOM.");
        return;
    }

    const emblaNode = document.querySelector('.embla');
    if (!emblaNode) {
        console.warn('Element .embla not found in the DOM.');
        return;
    }
    const viewportNode = emblaNode.querySelector('.embla__viewport');
    if (!viewportNode) {
        console.warn('Element .embla__viewport not found in the DOM.');
        return;
    }

    if (typeof EmblaCarousel !== 'function') {
        console.error('EmblaCarousel is not defined.');
        return;
    }


    const embla = EmblaCarousel(viewportNode, {
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        speed: 10,
    });

    const btnPrev = emblaNode.querySelector('.embla__prev');
    const btnNext = emblaNode.querySelector('.embla__next');

    if (btnPrev) btnPrev.addEventListener('click', embla.scrollPrev);
    if (btnNext) btnNext.addEventListener('click', embla.scrollNext);
}

renderContacts(contacts);
