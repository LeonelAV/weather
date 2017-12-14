import axios from 'axios';

const API_KEY =  '64163f22e510550b96a3a600a38a1e0f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`; // contry code will be static in this case 'US'
  const request = axios.get(url);

  return {
    type:FETCH_WEATHER,
    payload: request
  };
}