import searchImg from '../src/images/search.svg';
import partlyCloudy from '../src/images/partly-cloudy.png';
import temp from '../src/images/water-drop_13300314.png';
import rain from '../src/images/rain.png';
import wind from '../src/images/wind.png';
import searImgLight from '../src/images/search.png';
import partlyCloudyLight from '../src/images/partly-cloudy-light.png';
import tempLight from '../src/images/water-drop.png';
import rainLight from '../src/images/rain-light.png';
import windLight from '../src/images/wind-light.png';
import nightImg from '../src/images/darkmountain.jpg';
import dayImg from '../src/images/1994610.jpg';

let current = 0;
// eslint-disable-next-line require-jsdoc
export default function toggleTheme() {
  if (current === 0) {
    const content = document.getElementById('content');

    const areaName = document.querySelector('.areaName');
    areaName.classList.add('light');

    const weatherCondition = document.querySelector('.weatherCondition');
    weatherCondition.classList.add('light');

    const mainTemp = document.querySelector('.mainTemp');
    mainTemp.classList.add('light');

    const header = document.querySelectorAll('.header');
    header.forEach((element) => {
      element.classList.add('light');
    });

    const inputArea = document.getElementById('inputArea');
    inputArea.classList.add('light');

    const info = document.querySelectorAll('.rightBar > * > :nth-child(3)');

    const searchImg = document.querySelector('.searchImg');

    searchImg.src = searImgLight;

    const rightBarImg = document.querySelectorAll('.rightBarImg');
    rightBarImg[0].src = partlyCloudyLight;
    rightBarImg[1].src = tempLight;
    rightBarImg[2].src = rainLight;
    rightBarImg[3].src = windLight;

    info.forEach((element) => {
      element.classList.add('light');
    });

    const hour = document.querySelectorAll('.hour');
    hour.forEach((element) => {
      element.classList.add('light');
    });

    const hourTemp = document.querySelectorAll('.hourTemp');
    hourTemp.forEach((element) =>{
      element.classList.add('light');
    });

    // eslint-disable-next-line max-len
    content.style.backgroundImage = `url(${nightImg})`;
    current = 1;
  } else {
    current = 0;
    const content = document.getElementById('content');
    // eslint-disable-next-line max-len
    content.style.backgroundImage = `url(${dayImg})`;
    removeLight();
  }
}

// eslint-disable-next-line require-jsdoc
function removeLight() {
  const light = document.querySelectorAll('.light');
  light.forEach((element) =>{
    element.classList.remove('light');
  });
  const search = document.querySelector('.searchImg');
  search.src = searchImg;
  const rightBarImg = document.querySelectorAll('.rightBarImg');
  rightBarImg[0].src = partlyCloudy;
  rightBarImg[1].src = temp;
  rightBarImg[2].src = rain;
  rightBarImg[3].src = wind;
}
