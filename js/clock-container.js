const clockContainer = document.querySelector('.clock-container');

function updateCountdown() {
    const now = new Date();
    const nextYear = now.getFullYear();
    const newYear = new Date(`July 1, ${nextYear} 00:00:00`);
    const diff = newYear - now;

    if (diff <= 0) {
        clockContainer.innerText = "Happy New Year!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    clockContainer.innerText =
        `Time left until the promotion: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
