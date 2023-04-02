(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobilemenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobilemenuRef.classList.toggle('is-open');
  });
})();
