import toggleTheme from './themeToggle';
import {getCurrentUnit} from './getInfo';

/* eslint-disable require-jsdoc */
export default function setRightSide(feels, humidity, chanceOfRain, windSpeed) {
  const feelsLikeData = document.querySelector('.feelsLikeData');
  const humidityData = document.querySelector('.humidityData');
  const chanceOfRainData = document.querySelector('.chanceOfRainData');
  const windSpeedData = document.querySelector('.windSpeedData');
  if (getCurrentUnit()) {
    feelsLikeData.textContent = feels + ' °C';
  } else {
    feelsLikeData.textContent = feels + ' °F';
  }
  humidityData.textContent = humidity + ' %';
  chanceOfRainData.textContent = chanceOfRain + ' %';
  windSpeedData.textContent = windSpeed + ' km/h';
}

const toggle = document.querySelector('.switch__input');
toggle.addEventListener('click', () =>{
  toggleTheme();
});
