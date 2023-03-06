import React from 'react'
import {formatToLocalTime} from "../services/theWeatherService";

function TimeTitleLocation({weather: {dt, timezone, name, country}}) {
    return (
        <div>
            <div className="flex items-center justify-center my-5">
                <p className="text-white 2xl:text-3xl  xl:text-2xl md:text-xl  sm:text-lg media-screen440:text-[15px]  nexus-mobiles:text-[13px] old-mobile:text-[12px] smaller-mobile:text-[10px] font-light">
                    {formatToLocalTime(dt, timezone)}
                </p>
            </div>
            <div className="flex items-center justify-center my-5">

                <p className="text-white 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl  media-screen440:text-2xl nexus-mobiles:text-[22px] old-mobile:text-[19px] smaller-mobile:text-base font-medium">{`${name}, ${country}`}</p>

            </div>
        </div>
    )
}

export default TimeTitleLocation;