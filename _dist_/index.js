import { getWeatherHuamantla, getWeatherBySeacrh } from './getDAata.js';

const $search = document.querySelector('form');
const $input = $search.querySelector('input');

const handleSubmit = (e)=>{
    e.preventDefault();
    const city = $input.value;
    
    $input.value.length > 3 ? getWeatherBySeacrh(city) : alert('Ingresa una ciudad valida');
    $input.value = '';
}

$search.addEventListener('submit', handleSubmit);
getWeatherHuamantla();