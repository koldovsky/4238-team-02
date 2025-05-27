
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
  }
};

const form = document.querySelector('.footer__subscribe-form');
const input = document.querySelector('.footer__input');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Видаляємо попереднє повідомлення, якщо вже було
  const oldMessage = form.querySelector('.footer__message');
  if (oldMessage) {
    oldMessage.remove();
  }

  const email = input.value.trim(); // забираємо пробіли

  // Створюємо новий div-повідомлення
  const message = document.createElement('div');
  message.classList.add('footer__message');

  if (email.includes('@') && email.includes('.')) {
    message.textContent = "✅ Підписка успішна!";
    message.classList.add('success');
    input.value = ''; // очищаємо поле
  } else {
    message.textContent = "❌ Email невалідний. Спробуйте ще раз.";
    message.classList.add('error');
  }

  // Додаємо повідомлення у форму
  form.appendChild(message);
});
const trigger = document.getElementById('subscribe-focus-trigger');

if (trigger && input) {
  trigger.style.cursor = 'pointer'; // курсор як у кнопки
  trigger.addEventListener('click', () => {
    input.focus(); // ставимо фокус на поле email
  });
}


tryAttachFooterHandler();