import { showWeatherData } from './showData'
import axios from 'axios';
import.meta.env;

const baseUrl = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL;
const apiKey = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_KEY;


export const getWeatherHuamantla = async ()=>{

    const res = await axios.get(`${baseUrl}data/2.5/weather?q=Huamantla&appid=${apiKey}&units=metric`);
    showWeatherData(res.data);

}

export const getWeatherBySeacrh = async ( city )=>{

    const res = await axios.get(`${baseUrl}data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    showWeatherData(res.data);

}