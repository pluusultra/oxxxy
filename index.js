let phrases = [
  {
    text: 'Говно'
  },
  {
    text: 'Залупа'
  },
  {
    text: 'Пенис'
  },
  {
    text: 'Хер'
  },
  {
    text: 'Давалка'
  },
  {
    text: 'Хуй'
  },
  {
    text: 'Блядина'
  },
  {
    text: 'Головка'
  },
  {
    text: 'Шлюха'
  },
  {
    text: 'Жопа'
  },
  {
    text: 'Член'
  },
  {
    text: 'Еблан'
  },
  {
    text: 'Петух'
  },
  {
    text: 'Мудила'
  },
  {
    text: 'Рукоблуд'
  },
  {
    text: 'Ссанина'
  },
  {
    text: 'Очко'
  },
  {
    text: 'Блядун'
  },
  {
    text: 'Вагина'
  },
  {
    text: 'Сука'
  },
  {
    text: 'Ебланище'
  },
  {
    text: 'Влагалище'
  },
  {
    text: 'Пердун'
  },
  {
    text: 'Дрочила'
  },
  {
    text: 'Пидор'
  },
  {
    text: 'Пизда'
  },
  {
    text: 'Туз'
  },
  {
    text: 'Малафья'
  },
  {
    text: 'Гомик'
  },
  {
    text: 'Мудила'
  },
  {
    text: 'Пилотка'
  },
  {
    text: 'Манда'
  },
  {
    text: 'Анус'
  },
  {
    text: 'Вагина'
  },
  {
    text: 'Путана'
  },
  {
    text: 'Педрила'
  },
  {
    text: 'Шалава'
  },
  {
    text: 'Хуила'
  },
  {
    text: 'Мошонка'
  },
  {
    text: 'Елда'
  },
  {
    text: 'РАУНД'
  }
];

let currentIndex = 0;
let currentLimit = 1;

let button = document.querySelector('.button');

let phrase = document.querySelector('.phrase');

let image = document.querySelector('.image');

button.addEventListener('click', function () {
  for (; currentIndex < currentLimit && currentIndex < phrases.length; currentIndex++) {
    smoothly(phrase, 'textContent', phrases[currentIndex].text);
  }
  if (currentLimit <= phrases.length) {
    currentLimit++;
  } else {
    currentIndex = 0;
    currentLimit = 1;
    smoothly(phrase, 'textContent', 'Еще раз');
  }
});
