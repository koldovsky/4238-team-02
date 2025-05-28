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
    }
];

function renderContacts(contacts) {
    // ...existing code...
    let contactsHTML = [];
    for (const contact of contacts) {
        contactsHTML.push(`
            <div class="col-md-4 contact-card">
                <iframe class="contact-card__map" src="${contact.map}"></iframe>
                <div class="contact-card__title">${contact.title}</div>
                <div class="contact-card__info">${contact.address}</div>
                <div class="contact-card__info">${contact.phone}</div>
                <div class="contact-card__info">${contact.email}</div>
            </div>
        `);
    }
    const contactsContainer = document.querySelector(".contacts__container");
    contactsContainer.innerHTML = contactsHTML.join("");
    // ...existing code...
}

renderContacts(contacts);
