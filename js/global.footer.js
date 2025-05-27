console.log("Футер JS завантажено");

const tryAttachFooterHandler = () => {
  const footer = document.querySelector('footer');
  const toggleBtn = document.getElementById('footer-theme-toggle');

  if (footer && toggleBtn) {
    // тема за замовчуванням світла
    const savedTheme = localStorage.getItem('footerTheme') || 'light';

    if (savedTheme === 'dark') {
      footer.classList.add('footer--dark');
      toggleBtn.textContent = '🌞 Light Mode';
    } else {
      footer.classList.remove('footer--dark');
      toggleBtn.textContent = '🌙 Dark Mode';
    }

    //  перемикання теми
    toggleBtn.addEventListener('click', () => {
      const isDark = footer.classList.contains('footer--dark');

      if (isDark) {
        footer.classList.remove('footer--dark');
        toggleBtn.textContent = '🌙 Dark Mode';
        localStorage.setItem('footerTheme', 'light');
      } else {
        footer.classList.add('footer--dark');
        toggleBtn.textContent = '🌞 Light Mode';
        localStorage.setItem('footerTheme', 'dark');
      }
    });

    console.log("Перемикач теми футера готовий");
  } else {
    console.warn("Футер або кнопка не знайдені, пробую пізніше...");
    setTimeout(tryAttachFooterHandler, 300);
  }
};

tryAttachFooterHandler();