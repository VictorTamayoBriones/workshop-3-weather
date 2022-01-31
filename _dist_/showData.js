const $cityName = document.querySelector('#cityName');
const $weatherIcon = document.querySelector('#weather-icon');
const $weatherTemp = document.querySelector('#weather-temp');
const $greeting = document.querySelector('#greeting');

const daysOfWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const iconUrl = 'http://openweathermap.org/img/wn/';

let weather = {}

export const showWeatherData = (data)=>{

    weather = {
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: `${data.main.temp}º`,
        feels: `feels like ${data.main.feels_like}`,
        date: new Date().getDay()
    }

    $cityName.textContent = `${data.name}, ${data.sys.country}`;
    $weatherIcon.src = `${iconUrl}/${weather.icon}@2x.png`
    $weatherTemp.childNodes[1].textContent = weather.temp;
    $weatherTemp.childNodes[3].textContent = weather.feels;
    $greeting.childNodes[1].textContent = weather.desc;
    $greeting.childNodes[3].textContent = daysOfWeek[weather.date];
}
