const langContainer = document.querySelector('.js-lang-menu-container');
const openLangBtn = document.querySelector('.js-open-lang-menu');

const phoneContainer = document.querySelector('.js-phone-menu-container');
const openPhoneBtn = document.querySelector('.js-open-phone-menu');

const menuContainer = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

const hideMenu = (event, container, openBtn, closeBtn) => {
  if (!container.contains(event.target) && !openBtn.contains(event.target)) {
    container.classList.remove('is-open');
    openBtn.setAttribute('aria-expanded', false);
    if (closeBtn) {
      openBtn.classList.remove('button-hidden');
      closeBtn.classList.add('button-hidden');
    }
    bodyScrollLock.enableBodyScroll(document.body);
  }
};

document.onclick = function (event) {
  hideMenu(event, langContainer, openLangBtn);
  hideMenu(event, phoneContainer, openPhoneBtn);
  hideMenu(event, menuContainer, openMenuBtn, closeMenuBtn);
};

function highlightMenuLink() {
  const location = window.location;

  const currentPathName = location.pathname;
  const menuLinks = document.getElementsByClassName('mobile-menu__link');
  const subMenuLinks = document.getElementsByClassName('mobile-submenu__link');

  const allMenuLinks = [...menuLinks, ...subMenuLinks];
  for (const menuLink of allMenuLinks) {
    const pathname = menuLink.pathname;

    if (currentPathName === pathname) {
      menuLink.classList.add('mobile-menu__link--current');
    } else {
      menuLink.classList.remove('mobile-menu__link--current');
    }
  }
}
highlightMenuLink();
