(() => {
  const container = document.querySelectorAll('.editorPick__thumb');

  container.forEach((item, index) =>
    item.addEventListener('click', e => {
      let activ = document.querySelector('.editorPick__thumb.active');
      let passiv = document.querySelector('.editorPick__thumb.passive');
      if (e.currentTarget.classList.contains('active')) {
        return;
      }

      if (e.currentTarget.classList.contains('passive')) {
        console.log(e.currentTarget.classList);
        console.log('active', activ.classList);
        activ.classList.add('passive');
        activ.classList.remove('active');
        passiv.classList.remove('passive');
        passiv.classList.add('active');
      }
      e.currentTarget.classList.add('active');
      activ.classList.remove('active');
    })
  );
})();
