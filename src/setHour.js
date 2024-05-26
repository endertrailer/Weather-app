import {getCurrentUnit} from './getInfo';
import {getTemp} from './getInfo';
import currentLocation from './currentLocation';
import {isThisHour} from 'date-fns';
import snowImg from '../src/weatherSymbols/icons8-snow-96.png';
import rainImg from '../src/weatherSymbols/icons8-rain-96 (2).png';
// eslint-disable-next-line max-len
import partlyCloudyImg from '../src/weatherSymbols/icons8-partly-cloudy-day-96.png';
import clearNight from '../src/weatherSymbols/clear-night.png';
import clearDay from '../src/weatherSymbols/sun.png';
import cloudImg from '../src/weatherSymbols/cloud.png';

let hourCount = 0;
const previousHour = document.querySelector('.previousHour');
const nextHours = document.querySelector('.nextHours');

previousHour.addEventListener('click', () =>{
  if (hourCount >= 1) {
    hourCount -= 1;
    getTemp(currentLocation());
  }
});

nextHours.addEventListener('click', () =>{
  if (hourCount < 3) {
    hourCount += 1;
    getTemp(currentLocation());
  }
});


// eslint-disable-next-line require-jsdoc
export default function setHour(info) {
  const hourCards = document.querySelectorAll('.hourCard');
  const hour = document.querySelectorAll('.hour');
  const hourTemp = document.querySelectorAll('.hourTemp');
  const hourWeatherSymbol = document.querySelectorAll('.hourWeatherSymbol');
  let count = 0;
  currentLightDot(hourCount);
  for (let i = hourCount * 6; i < hourCards.length * (hourCount + 1); i += 1) {
    if (isThisHour(info[i].time)) {
      hour[count].textContent = 'Now';
    } else {
      hour[count].textContent = info[i].time.slice(-5);
    }

    if (getCurrentUnit()) {
      hourTemp[count].textContent = info[i].temp_c + ' °C';
    } else {
      hourTemp[count].textContent = info[i].temp_f + ' °F';
    }
    // eslint-disable-next-line max-len
    hourWeatherSymbol[count].src = '../src/weatherSymbols/icons8-partly-cloudy-day-96.png';
    const snowWeather = [
      'Patchy snow possible',
      'Blowing snow',
      'Blizzard',
      'Patchy light snow',
      'Light snow',
      'Patchy moderate snow',
      'Moderate snow',
      'Patchy heavy snow',
      'Heavy snow',
      'Light snow showers',
      'Moderate or heavy snow showers',
      'Light showers of ice pellets',
      'Moderate or heavy showers of ice pellets',
      'Patchy light snow with thunder',
      'Moderate or heavy snow with thunder',
      'Freezing drizzle',
      'Heavy freezing drizzle',
      'Light freezing rain',
      'Moderate or heavy freezing rain',
      'Light sleet',
      'Moderate or heavy sleet',
    ];

    const rain = [
      'Patchy light rain',
      'Light rain',
      'Moderate rain at times',
      'Moderate rain',
      'Heavy rain at times',
      'Heavy rain',
      'Patchy light rain with thunder',
      'Moderate or heavy rain with thunder',
      'Light rain shower',
      'Moderate or heavy rain shower',
      'Torrential rain shower',
    ];

    const cloudy = [
      'Partly cloudy',
      'Cloudy',
      'Overcast',
    ];

    const clear = [
      'Sunny',
      'Clear',
    ];


    if (snowWeather.includes(info[i].condition.text)) {
      hourWeatherSymbol[count].src = snowImg;
    } else if (rain.includes(info[i].condition.text)) {
      hourWeatherSymbol[count].src = rainImg;
    } else if (cloudy.includes(info[i].condition.text)) {
      hourWeatherSymbol[count].src = partlyCloudyImg;
    } else if (clear.includes(info[i].condition.text)) {
      if (info[i].condition.text === 'Clear') {
        hourWeatherSymbol[count].src = clearNight;
      } else {
        hourWeatherSymbol[count].src = clearDay;
      }
    } else {
      hourWeatherSymbol[count].src = cloudImg;
    }
    count++;
  }
}

// eslint-disable-next-line require-jsdoc
function currentLightDot(currentHour) {
  const dot = document.querySelectorAll('.dot');
  dot.forEach((element) => {
    element.style.backgroundColor = '';
  });
  dot[currentHour].style.backgroundColor = 'white';
}
