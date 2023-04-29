let phrases = [
  {
    text: 'Говно',
    music: './music/m1.mp3'
  },
  {
    text: 'Залупа',
    music: './music/m2.mp3'
  },
  {
    text: 'Пенис',
    music: './music/m3.mp3'
  },
  {
    text: 'Хер',
    music: './music/m4.mp3'
  },
  {
    text: 'Давалка',
    music: './music/m5.mp3'
  },
  {
    text: 'Хуй',
    music: './music/m6.mp3'
  },
  {
    text: 'Блядина',
    music: './music/m7.mp3'
  },
  {
    text: 'Головка',
    music: './music/m8.mp3'
  },
  {
    text: 'Шлюха',
    music: './music/m9.mp3'
  },
  {
    text: 'Жопа',
    music: './music/m10.mp3'
  },
  {
    text: 'Член',
    music: './music/m11.mp3'
  },
  {
    text: 'Еблан',
    music: './music/m12.mp3'
  },
  {
    text: 'Петух',
    music: './music/m13.mp3'
  },
  {
    text: 'Мудила',
    music: './music/m14.mp3'
  },
  {
    text: 'Рукоблуд',
    music: './music/m15.mp3'
  },
  {
    text: 'Ссанина',
    music: './music/m16.mp3'
  },
  {
    text: 'Очко',
    music: './music/m17.mp3'
  },
  {
    text: 'Блядун',
    music: './music/m18.mp3'
  },
  {
    text: 'Вагина',
    music: './music/m19.mp3'
  },
  {
    text: 'Сука',
    music: './music/m20.mp3'
  },
  {
    text: 'Ебланище',
    music: './music/m21.mp3'
  },
  {
    text: 'Влагалище',
    music: './music/m22.mp3'
  },
  {
    text: 'Пердун',
    music: './music/m23.mp3'
  },
  {
    text: 'Дрочила',
    music: './music/m24.mp3'
  },
  {
    text: 'Пидор',
    music: './music/m25.mp3'
  },
  {
    text: 'Пизда',
    music: './music/m26.mp3'
  },
  {
    text: 'Туз',
    music: './music/m27.mp3'
  },
  {
    text: 'Малафья',
    music: './music/m28.mp3'
  },
  {
    text: 'Гомик',
    music: './music/m29.mp3'
  },
  {
    text: 'Мудила',
    music: './music/m30.mp3'
  },
  {
    text: 'Пилотка',
    music: './music/m31.mp3'
  },
  {
    text: 'Манда',
    music: './music/m32.mp3'
  },
  {
    text: 'Анус',
    music: './music/m33.mp3'
  },
  {
    text: 'Вагина',
    music: './music/m34.mp3'
  },
  {
    text: 'Путана',
    music: './music/m35.mp3'
  },
  {
    text: 'Педрила',
    music: './music/m36.mp3'
  },
  {
    text: 'Шалава',
    music: './music/m37.mp3'
  },
  {
    text: 'Хуила',
    music: './music/m38.mp3'
  },
  {
    text: 'Мошонка',
    music: './music/m39.mp3'
  },
  {
    text: 'Елда',
    music: './music/m40.mp3'
  },
  {
    text: 'РАУНД',
    music: './music/m41.mp3'
  }
];

let currentIndex = 0;
let currentLimit = 1;

let button = document.querySelector('.button');

let phrase = document.querySelector('.phrase');

let image = document.querySelector('.image');

let music = document.querySelector('.play');

button.addEventListener('click', function () {
  for (; currentIndex < currentLimit && currentIndex < phrases.length; currentIndex++) {
    phrase.textContent = phrases[currentIndex].text;
    music.src = phrases[currentIndex].music;
    music.play();
  }
  if (currentLimit <= phrases.length) {
    currentLimit++;
  } else {
    currentIndex = 0;
    currentLimit = 1;
    smoothly(phrase, 'textContent', 'Еще раз');
  }
});
