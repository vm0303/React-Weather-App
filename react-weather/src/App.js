import './App.css';
import QuickCities from "./components/QuickCities";
import Inputs from "./components/Inputs";
import TimeTitleLocation from "./components/TimeTitleLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";

import getFormattedWeatherData from "./services/theWeatherService";
import {useEffect, useState} from "react";
import {Slide, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


    const [query, setQuery] = useState()
    const [units, setUnits] = useState('imperial');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {

            const message = query.q ? query.q : 'current location'

            toast.info('Fetching weather for ' + message)

            await getFormattedWeatherData({...query, units}).then(weatherData => {

                toast.success(`Successfully fetched the weather for ${weatherData.name}, ${weatherData.country}.`)
                setWeather(weatherData);


            });

        };
        fetchWeatherData();
    }, [query, units]);


    const backgroundChange = () => {
        if (!weather) {
            return 'from-sky-700 to-cyan-500'
        }
        const degreeThreshold = units === 'imperial' ? 68 : 140

        if (weather.temp <= degreeThreshold) {
            return 'from-sky-700 to-cyan-500'
        }
        return 'from-yellow-700 to-orange-700'
    }
    return (
        <div className="App">

            <div className="text-content">
                <h1 className="text-title">WeathAware</h1>
                <div className="info">
                    <p>Look up the weather from various cities or towns across the world!</p>
                </div>
                <div>
                    <p className="small-info">Note: The OpenWeatherMap API goes by the name of a city or a town,
                        and the country from where that city or town is from.</p>
                    <p className="small-info">For example, if you search "New York, which represents the city of New
                        York in the United States,
                        then the API will return "New York, US" instead of "New York, NY, US", which poses a huge
                        problem for cities or towns
                        that have the same exact name in any country.</p>
                    <p className="small-info">However, the solution for this is simple.
                        If any country has a state associated with a city or a town, then you type in the
                        name of that city or town, the state where that city or town resides, and the 2-letter country
                        code,
                        which can be found&nbsp;<a className="iso-codes-link"
                                                   href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes "
                                                   rel="noreferrer"
                                                   target="_blank">here</a>.</p>
                    <p className="small-info-with-border">Example: "Paris, TX , US"</p>
                    <p className="small-info-with-border second-color">Example: "Mumbai, Maharashtra, IN" </p>
                    <p className="small-info">As for countries that does <b>NOT</b> have a state associated with
                        that city, type in only the city's name and
                        the 2-letter country code where that city resides.</p>
                    <p className="small-info-with-border">Example: "London, CA"</p>
                    <p className="small-info">Keep in mind that not every city or town can be found in any country
                        because the data from OpenWeatherMap API is limited and returns a 404 error stating that it
                        can't find that city.
                    </p>
                    <p className="small-info">The solution for this is to use the location icon to get the exact
                        location of the city or town you reside in since it goes by the latitude and longitude
                        coordinates.
                    </p>
                    <p className="side-info">Side Note: The background of the weather dashboard changes color when the
                        temp of a city or town
                        is higher than 68 °F.
                    </p>
                </div>

            </div>

            <div className={`max-w-screen-md mx-auto mt-4 p-1 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-stone-700
       sm:p-1 sm:px-10  smaller-mobile:max-w-[85%] smaller-mobile:p-1 ${backgroundChange()}`}>
                <QuickCities setQuery={setQuery}/>
                <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
                {weather && (
                    <div>
                        <TimeTitleLocation weather={weather}/>
                        <TempAndDetails weather={weather} units={units}/>
                        <Forecast title="hourly forecast" units={units} items={weather.hourly}/>
                        <Forecast title="daily forecast" units={units} items={weather.daily}/>
                    </div>
                )}
            </div>
            <br/>
            <br/>
            <footer>
                <p className="footer-info">Copyright &copy; 2023 <a className="theLink"
                                                                    href="https://www.youtube.com/watch?v=cWk5EKVxrgo&ab_channel=ProgrammingWithYash"
                                                                    rel="noreferrer"
                                                                    target="_blank">Programming With Yash</a>
                </p>

                <p className="footer-info"> Edited and re-created by <a className="theLink"
                                                                        href="#"
                                                                        rel="noreferrer"
                                                                        target="_blank">Vishal Madhav</a></p>
            </footer>

            <ToastContainer autoClose={5000} theme='colored' transition={Slide} newestOnTop={true}/>

        </div>
    );
}

export default App;
