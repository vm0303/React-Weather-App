import {DateTime} from "luxon";
import {toast} from 'react-toastify';
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

console.log(API_KEY);

const getWeatherData = (infoType, searchCity) => {

    const theURL = new URL(BASE_URL + "/" + infoType);
    theURL.search = new URLSearchParams({...searchCity, appid: API_KEY});

    return fetch(theURL)
        .then((res) =>
        {
            if (!res.ok)
            {
                toast.error("Error: Either the city you typed is spelled wrong or it doesn't exist at all.")
            }
           return res.json()
        })

};

const formatCurrentWeather = (currentWeatherData) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}


    } = currentWeatherData;

    const {main: details, icon} = weather[0];
    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed
    }
}
const formatForecastWeather = (forecastData) => {
    let {timezone, daily, hourly} = forecastData;
    daily = daily.slice(1, 6).map(dailyData => {
        return {
            title: formatToLocalTime(dailyData.dt, timezone, 'cccc'),
            temp: dailyData.temp.day,
            icon: dailyData.weather[0].icon
        }
    });

    hourly = hourly.slice(1, 6).map(hourlyData => {
        return {
            title: formatToLocalTime(hourlyData.dt, timezone, 'hh:mm a'),
            temp: hourlyData.temp,
            icon: hourlyData.weather[0].icon
        }
    });

    return {timezone, daily, hourly};
};
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)

    const {lat, lon} = formattedCurrentWeather


    const formattedForecastWeather = await getWeatherData('onecall', {
        lat,
        lon,
        exclude: 'current,minutely,alerts',
        units: searchParams.units,
    }).then(formatForecastWeather)
    return {...formattedCurrentWeather, ...formattedForecastWeather};
};

const formatToLocalTime = (secs, zone, format = "cccc | LLLL dd, yyyy' | Local Time: 'hh:mm a' ") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


const iconURLFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`


export default getFormattedWeatherData;

export {formatToLocalTime, iconURLFromCode}
