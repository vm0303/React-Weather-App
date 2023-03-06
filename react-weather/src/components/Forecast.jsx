import React from 'react'
import {iconURLFromCode} from "../services/theWeatherService";

function Forecast(
    {
        title,
        items,
        units
    }) {

    const tempUnit = units === 'imperial' ? '°F' : '°C'
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase xl:text-[30px] lg:text-[20px] md:text-[17px] sm:text-[15px] old-mobile:text-[13px] smaller-mobile: text-[10px] ">
                    {title}
                </p>
            </div>

            <hr className="my-2 "/>

            <div className="flex flex-row items-center justify-between
    text-white xl:m-4 sm:m-2 old-mobile:m-1 smaller-mobile:m-0">
                {items.map(item => (
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light 2xl:text-[25px] xl:text-[21px] lg:text-[18px] md:text-[15px]  sm:text-[14px] media-screen536:[13px]  nexus-mobiles:text-[12px] samsung-phones:text-[11px] old-mobile:text-[10px] smaller-mobile:text-[9px]">{item.title}</p>
                        <img src={iconURLFromCode(item.icon)}
                             alt="An icon that gives users a visual image on how the weather will be for either the next hour or the next day."
                             className=" 2xl:w-20 xl:w-16 lg:w-14 md:w-13 samsung-phones:w-12 old-mobile:w-10  smaller-mobile:w-8  smaller-mobile:my-2"
                        />
                        <p className="font-medium 2xl:text-[25px] xl:text-[21px] lg:text-[18px] md:text-[15px]  sm:text-[14px] media-screen536:[13px] nexus-mobiles:text-[12px] samsung-phones:text-[11px] old-mobile:text-[10px] smaller-mobile:text-[9px]">{` ${item.temp.toFixed()}  ${tempUnit}`}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Forecast;