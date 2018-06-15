//https://openweathermap.org/forecast5
import axios from 'axios';

//Chave da API
const API_KEY = 'f7cd349684c50225d18c803421fcd564';

//Opcional: URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETH_WEATHER';

//Actions devem retornar um type
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`; //País = us
    const request = axios.get(url);

    console.log('Request', request);
    return {
        type: FETCH_WEATHER,
        payload: request //Retornando a promisse no payload
    };
}