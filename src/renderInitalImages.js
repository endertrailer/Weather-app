/* eslint-disable require-jsdoc */
import searchImg from '../src/images/search.svg';
import partlyCloudy from '../src/images/partly-cloudy.png';
import temp from '../src/images/water-drop_13300314.png';
import rain from '../src/images/rain.png';
import wind from '../src/images/wind.png';
import backImg from '../src/images/angle-left.png';
import frontImg from '../src/images/angle-right.png';

export default function renderInitialImages() {
  const search = document.querySelector('.searchImg');
  search.src = searchImg;
  const rightBarImg = document.querySelectorAll('.rightBarImg');
  rightBarImg[0].src = partlyCloudy;
  rightBarImg[1].src = temp;
  rightBarImg[2].src = rain;
  rightBarImg[3].src = wind;
  const previousHour = document.querySelector('.previousHour');
  const nextHours = document.querySelector('.nextHours');
  previousHour.src = backImg;
  nextHours.src = frontImg;
}
