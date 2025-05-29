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
        address: "28 State St 37th floor, Boston, MA 02109, United States",
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
    }
];

function renderContacts(contacts) {
    let contactsHTML = [];
    for (const contact of contacts) {
        contactsHTML.push(`
            <div class="col-md-4 contact-card">
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
    }
}

renderContacts(contacts);