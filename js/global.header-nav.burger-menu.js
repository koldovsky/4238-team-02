const hamburgerToggleButton = document.querySelector('.header-navigation__burger');
const hamburgerMenuContent = document.querySelector('.header-navigation__burger-menu-container--disabled');

hamburgerToggleButton.addEventListener('click', () => {
  hamburgerMenuContent.classList.toggle('.header-navigation__burger-menu-container');
  hamburgerMenuContent.classList.toggle('.header-navigation__burger-menu-container--disabled');
  console.log('✅ Кнопка натиснута');
});