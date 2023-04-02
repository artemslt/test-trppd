(() => {
  const btnRef = document.querySelector('.editorPick__sort-button');
  const menuRef = document.querySelector('.editorPick__sort-list');
  const menuItemRef = document.querySelectorAll('.editorPick__sort-item');

  btnRef.addEventListener('click', () => {
    const expanded = btnRef.classList.toggle('is-open');
    btnRef.setAttribute('aria-expanded', !expanded);

    menuRef.classList.toggle('is-open');
  });
  menuItemRef.forEach(item =>
    item.addEventListener('click', () => {
      const expanded = btnRef.classList.toggle('is-open');
      btnRef.setAttribute('aria-expanded', !expanded);

      menuRef.classList.toggle('is-open');
    })
  );
})();
