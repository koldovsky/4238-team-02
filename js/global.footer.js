console.log("Футер JS завантажено");

const tryAttachFooterHandler = () => {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.addEventListener('click', () => {
      alert('Ти клікнув по футеру! 🎉');
    });
    console.log("Обробник кліку додано до футера");
  } else {
    console.warn("Футер не знайдено, пробую пізніше...");

    // Спробуємо ще раз через трохи часу
    setTimeout(tryAttachFooterHandler, 300);
  }
};

// Запускаємо першу спробу
tryAttachFooterHandler();