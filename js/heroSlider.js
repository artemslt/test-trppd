(function () {
  const pictures = [
    {
      img: 'contBcg-3',
      title: 'The Lake Walchen',
      text: 'One of the deepest and largest alpine lakes in Germany <br/> and one of the best outdoors place <br/> that you never imagine before',
    },
    {
      img: 'contBcg-1',
      title: 'The Murgseen Quarten',
      text: 'One of the deepest and largest alpine lakes in Germany <br/> and one of the best outdoors place <br/> that you never imagine before',
    },
    {
      img: 'contBcg-2',
      title: 'The Peyto Lake',
      text: 'One of the deepest and largest alpine lakes in Germany <br/> and one of the best outdoors place <br/> that you never imagine before',
    },
    {
      img: 'contBcg-4',
      title: 'The Finstertalspeicher',
      text: 'One of the deepest and largest alpine lakes in Germany <br/> and one of the best outdoors place <br/> that you never imagine before',
    },
    {
      img: 'contBcg-5',
      title: 'The Tree Island',
      text: 'One of the deepest and largest alpine lakes in Germany <br/> and one of the best outdoors place <br/> that you never imagine before',
    },
    {
      img: 'contBcg-6',
      title: 'The Engelberg Lake',
      text: 'One of the deepest and largest alpine lakes in Germany <br/> and one of the best outdoors place <br/> that you never imagine before',
    },
    {
      img: 'contBcg-7',
      title: 'The Sutherland Falls',
      text: 'One of the deepest and largest alpine lakes in Germany <br/> and one of the best outdoors place <br/> that you never imagine before',
    },
    {
      img: 'contBcg-8',
      title: 'The Queenstown Lake',
      text: 'One of the deepest and largest alpine lakes in Germany <br/> and one of the best outdoors place <br/> that you never imagine before',
    },
  ];

  const buttons = document.querySelectorAll('.hero-slider');
  const imageDIV = document.querySelector('.overlay');
  const title = document.querySelector('.hero__title');
  const text = document.querySelector('.hero__text');
  const sliderCounter = document.querySelector('.counter');
  let counter = 0;

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      if (button.classList.contains('left')) {
        counter--;
        if (counter < 1) {
          counter = pictures.length - 1;
        }
        imageDIV.style.backgroundImage =
          'linear-gradient(0deg,rgba(40, 39, 42, 1) 0%, rgba(40, 39, 42, 0.6) 25%, rgba(40, 39, 42, 0.3) 100%),' +
          `url('../../images/hero/${pictures[counter].img}.jpg')`;
        title.innerHTML = `${pictures[counter].title}`;
        text.innerHTML = `${pictures[counter].text}`;
        sliderCounter.innerHTML = `${counter + 1} / ${pictures.length}`;
      }

      if (button.classList.contains('right')) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        imageDIV.style.backgroundImage =
          'linear-gradient(0deg,rgba(40, 39, 42, 1) 0%, rgba(40, 39, 42, 0.6) 25%, rgba(40, 39, 42, 0.3) 100%),' +
          `url('../../images/hero/${pictures[counter].img}.jpg')`;
        title.innerHTML = `${pictures[counter].title}`;
        text.innerHTML = `${pictures[counter].text}`;
        sliderCounter.innerHTML = `${counter + 1} / ${pictures.length}`;
      }
    });
  });
})();
