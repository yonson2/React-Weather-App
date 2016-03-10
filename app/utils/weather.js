var axios = require('axios');
var apiKey = '3e5382f4f0c0235a6bce6f4a99e96e3b';

function getCityWeather (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + apiKey);
}

function getForecast (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID='+ apiKey + '&cnt=5');
}
var weather = {
  getCityWeather: getCityWeather,
  getForecast: getForecast
}

module.exports = weather;
