(() => {
  const left = document.getElementById('editorBtn-left');
  const right = document.getElementById('editorBtn-right');
  const listCounter = document.getElementById('editor-counter');
  const editorList = document.querySelectorAll('.editorPick__list');
  let counter = 0;
  right.addEventListener('click', () => {
    if (counter === 2) {
      editorList[counter].classList.add('visually-hidden');
      editorList[0].classList.remove('visually-hidden');
      counter = 0;
      listCounter.innerHTML = `${counter + 1} / ${editorList.length}`;
      return;
    }
    editorList[counter].classList.add('visually-hidden');
    editorList[counter + 1].classList.remove('visually-hidden');
    counter++;

    listCounter.innerHTML = `${counter + 1} / ${editorList.length}`;
  });
  left.addEventListener('click', () => {
    if (counter === 0) {
      editorList[counter].classList.add('visually-hidden');
      editorList[2].classList.remove('visually-hidden');
      counter = 2;
      listCounter.innerHTML = `${counter + 1} / ${editorList.length}`;
      return;
    }
    editorList[counter].classList.add('visually-hidden');
    editorList[counter - 1].classList.remove('visually-hidden');
    counter--;

    listCounter.innerHTML = `${counter + 1} / ${editorList.length}`;
  });
})();
