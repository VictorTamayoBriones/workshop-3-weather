import { showWeatherData } from './showData'
import axios from 'axios';
import.meta.env;

const baseUrl = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL;
const apiKey = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_KEY;


export const getWeatherHuamantla = async ()=>{

    fetch(`${baseUrl}data/2.5/weather?q=Huamantla&appid=${apiKey}&units=metric`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            showWeatherData(data);
        })
    // const res = await axios.get(`${baseUrl}data/2.5/weather?q=Huamantla&appid=${apiKey}&units=metric`, {withCredentials: false});

}

export const getWeatherBySeacrh = async ( city )=>{

    const res = await axios.get(`${baseUrl}data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, {withCredentials: false});
    showWeatherData(res.data);

}