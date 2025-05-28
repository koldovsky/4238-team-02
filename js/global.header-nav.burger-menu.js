const hamburgerToggleButton = document.querySelector('.header-navigation__burger');
const hamburgerMenuContent = document.querySelector('.header-navigation__burger-menu-container');

hamburgerToggleButton.addEventListener('click', () => {
  hamburgerMenuContent.classList.toggle('header-navigation__burger-menu-container--disabled');
  hamburgerToggleButton.classList.toggle('is-active');

  console.log('✅ Меню активовано');
});