import axios from 'axios';

const API_KEY = 'd00bb53f94d4dbcb333180e6aeb70cb6';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
	console.log(city);
	const url = `${URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER, 
		payload: request
	};
}