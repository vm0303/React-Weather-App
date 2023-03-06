import React, {useState} from 'react'
import {UilLocationPoint, UilSearch} from '@iconscout/react-unicons'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Inputs({setQuery, units, setUnits}) {


    const [theCityName, setCityName] = useState("");

    const handleSearch = () => {
        if (theCityName !== '') {
            setQuery({q: theCityName})

        } else {
            toast.error("ERROR: The input field is blank.")
        }

    }

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({lat, lon})
            })
        }
    }
    const handleUnits = (event) => {

        const selectedUnit = event.currentTarget.name
        if (units !== selectedUnit) {
            setUnits(selectedUnit);
        }
    }

    return (
        <div className="flex flex-row justify-center my-6">
            <div className=" flex flex-row w-3/4 items-center justify-center space-x-2">
                <input value={theCityName} onChange={(event) => setCityName(event.currentTarget.value)}
                       placeholder="Search for a city..." spellCheck={true} lang={"en"} id="input" className=" 2xl:text-3xl xl:text-xl lg:text-lg sm:text-md old-mobile:text-[13px] smaller-mobile:text-[10px]  font-light p-2  lg:w-[75%]
              sm:w-[75%] old-mobile:w-[65%] smaller-mobile:w-[60%]  focus:outline-none capitalize
            placeholder:lowercase"/>
                <UilSearch size={24}
                           className="text-white  2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-7 sm:h-7  sm:w-6 sm:h-6 smaller-mobile:w-5 smaller-mobile:h-5 cursor-pointer transition ease-out hover:scale-125"
                           onClick={handleSearch}/>
                <UilLocationPoint size={24}
                                  className="text-white 2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-7 sm:h-7  sm:w-6 sm:h-6 smaller-mobile:w-5 smaller-mobile:h-5 cursor-pointer transition ease-out hover:scale-125"
                                  onClick={handleLocation}/>
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="imperial"
                        className="text-white 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl  old-mobile:text-md  smaller-mobile:text-sm font-light transition ease-out  hover:scale-[1.2]"
                        onClick={handleUnits}>°F
                </button>
                <p className=" 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl text-white mx-1">|</p>
                <button name="metric"
                        className="text-white 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl old-mobile:text-md  smaller-mobile:text-sm font-light transition ease-out hover:scale-[1.2]"
                        onClick={handleUnits}>°C
                </button>
            </div>
        </div>
    )
}

export default Inputs;