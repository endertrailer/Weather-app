/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import './style.css';
import {getTemp} from './getInfo';
import {getCurrentUnit} from './getInfo';
import currentLocation from './currentLocation';
import renderInitialImages from './renderInitalImages';

// function getFehrenheit(location){forecast.forecastday[0].day// }
const input = document.getElementById('inputArea');
const searchImg = document.querySelector('.searchImg');

searchImg.addEventListener('click', () =>{
  getTemp(input.value);
  currentLocation(input.value);
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    getTemp(input.value);
    currentLocation(input.value);
  }
});


export function setMaininfo(area, weather, temp) {
  const areaName = document.querySelector('.areaName');
  const mainTemp = document.querySelector('.mainTemp');
  const weatherCondition = document.querySelector('.weatherCondition');
  areaName.textContent = area;
  if (getCurrentUnit()) {
    mainTemp.textContent = temp + ' °C';
  } else {
    mainTemp.textContent = temp + ' °F';
  }
  weatherCondition.textContent = weather;
}


getTemp('nagpur');
renderInitialImages();
