const HEADER_BUTTON = document.querySelector('.header__nav_language__btn'),
      HEADER_LANGUAGE_MENU = document.querySelector('.header__nav_language__item'),
      HEADER_MOB_LANG = document.getElementById('mob_lang')
      HEADER_MOB_BTN = document.querySelector('.header__nav_language'),
      HEADER_MOB_MENU = document.querySelector('.header__nav_container'),
      BURGER = document.querySelector('.burger');

HEADER_MOB_BTN.addEventListener('click', function() {
  HEADER_BUTTON.classList.toggle('activeArrow')
  HEADER_MOB_LANG.classList.toggle('activeArrowMob')
  HEADER_LANGUAGE_MENU.classList.toggle('hide')
})

BURGER.addEventListener('click', function() {
  this.classList.toggle('burger_active')
  HEADER_MOB_MENU.classList.toggle('show')
})



