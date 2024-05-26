/* eslint-disable require-jsdoc */
import snowImg from '../src/weatherSymbols/icons8-snow-96.png';
import rainImg from '../src/weatherSymbols/icons8-rain-96 (2).png';
// eslint-disable-next-line max-len
import partlyCloudyImg from '../src/weatherSymbols/icons8-partly-cloudy-day-96.png';
import clearNight from '../src/weatherSymbols/clear-night.png';
import clearDay from '../src/weatherSymbols/sun.png';
import cloudImg from '../src/weatherSymbols/cloud.png';

export default function setMainImg(condition) {
  const weatherSymbol = document.querySelector('.weatherSymbol');
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


  if (snowWeather.includes(condition)) {
    weatherSymbol.src = snowImg;
  } else if (rain.includes(condition)) {
    weatherSymbol.src = rainImg;
  } else if (cloudy.includes(condition)) {
    weatherSymbol.src = partlyCloudyImg;
  } else if (clear.includes(condition)) {
    if (condition === 'Clear') {
      weatherSymbol.src = clearNight;
    } else {
      weatherSymbol.src = clearDay;
    }
  } else {
    weatherSymbol.src = cloudImg;
  }
};

