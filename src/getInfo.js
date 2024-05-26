/* eslint-disable require-jsdoc */
// import { get } from 'fast-levenshtein';
import setHour from './setHour';
import setRightSide from './getRightSide';
import {setMaininfo} from '.';
import currentLocation from './currentLocation';
import setMainImg from './setMainImg';


let isCelcius = true;
const areaName = document.querySelector('.areaName');

export async function getTemp(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=16d3d8b00296420daec115624242803 &q=${location}&aqi=no`, {mode: 'cors'});
  response.json().then(function(response) {
    const responseCurrent = response.current;
    const areaName = response.location.name;
    let mainTemp;
    let feelsLike;
    if (isCelcius) {
      mainTemp = responseCurrent.temp_c;
      feelsLike = responseCurrent.feelslike_c;
    } else {
      mainTemp = responseCurrent.temp_f;
      feelsLike = responseCurrent.feelslike_f;
    }
    const weatherCondition = responseCurrent.condition.text;
    const humidity = responseCurrent.humidity;
    // eslint-disable-next-line max-len
    const chanceOfRain = response.forecast.forecastday[0].day.daily_chance_of_rain;
    const windSpeed = responseCurrent.wind_kph;
    console.log(response);
    setHour(response.forecast.forecastday[0].hour);
    setMaininfo(areaName, weatherCondition, mainTemp);
    setRightSide(feelsLike, humidity, chanceOfRain, windSpeed);
    setMainImg(response.current.condition.text);
    const errorBar = document.querySelector('.errorBar');
    errorBar.textContent = '';
  }).catch(function(err) {
    const errorBar = document.querySelector('.errorBar');
    errorBar.textContent = 'Location not found!';
    console.log('enter valid place ' + err);
    currentLocation(areaName.textContent);
  });
}

(function currentUnit() {
  const farhenheit = document.querySelector('.farhenheitBtn');
  const celcius = document.querySelector('.celciusBtn');

  farhenheit.addEventListener('click', () =>{
    if (celcius.classList.contains('selected')) {
      celcius.classList.remove('selected');
    }
    farhenheit.classList.add('selected');
    isCelcius = false;
    getTemp(currentLocation());
  });

  celcius.addEventListener('click', () =>{
    if (farhenheit.classList.contains('selected')) {
      farhenheit.classList.remove('selected');
    }
    celcius.classList.add('selected');
    isCelcius = true;
    getTemp(currentLocation());
  });
})();


export function getCurrentUnit() {
  if (isCelcius) {
    return true;
  }
  return false;
}

