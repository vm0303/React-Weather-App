import React from 'react'
import {UilArrowDown, UilArrowUp, UilSun, UilSunset, UilTear, UilTemperature, UilWind,} from "@iconscout/react-unicons";

function TempAndDetails() {
    return (
        <div>
            <div
                className="flex items-center justify-center py-6 xl:text-3xl md:text-2xl sm:text-xl  old-mobile:text-lg smaller-mobile:text-sm text-sky-200">
                <p>Cloudy</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt=""
                     className=" 2xl:w-[230px] xl:w-[175px] lg:w-[155px] sm:w-[125px] old-mobile:w-[95px] smaller-mobile:w-[75px]"/>
                <p className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl old-mobile:text-2xl smaller-mobile:text-xl">34°</p>
                <div className="flex flex-col space-y-2">
                    <div
                        className="flex font-light items-center justify-center 2xl:text-[25px] xl:text-[20px] lg:text-[18px] sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[8px]">
                        <UilTemperature size={18} className="m-1 2xl:w-10 2xl:w-10 xl:w-7 xl:h-7 lg:w-5 lg:h-5  smaller-mobile:w-4 smaller-mobile:h-4"/>
                        Feels like:
                        <span className="font-medium ml-1 ">32°</span>
                    </div>
                    <div
                        className="flex font-light items-center justify-center  2xl:text-[25px]  xl:text-[20px] lg:text-[18px] sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[8px]">
                        <UilTear size={18} className="mr-1 2xl:w-10 2xl:w-10 xl:w-7 xl:h-7 lg:w-5 lg:h-5   smaller-mobile:w-4 smaller-mobile:h-4"/>
                        Humidity:
                        <span className="font-medium ml-1">43%</span>
                    </div>
                    <div
                        className="flex font-light items-center justify-center  2xl:text-[25px]  xl:text-[20px] lg:text-[18px] sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[8px]">
                        <UilWind size={18} className="mr-1 2xl:w-10 2xl:w-10 xl:w-7 xl:h-7 lg:w-5 lg:h-5 smaller-mobile:w-4 smaller-mobile:h-4"/>
                        Wind:
                        <span className="font-medium ml-1">3 mph</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center md:space-x-2 sm:space-x-1 nexus-mobiles:space-x-1 old-mobile:space-x-0.5 smaller-mobile:space-x-1 text-white py-3">
                <UilSun className=" 2xl:w-13 2xl:h-13 xl:w-11 xl:h-11 lg:w-10 lg:h-10 md:w-9 md:w-9 old-mobile:w-7 old-mobile:h-7  smaller-mobile:w-6 smaller-mobile:h-6"/>
                <p className="font-light 2xl:text-[28px] xl:text-[24px] lg:text-[17px] md:text-[13px] sm:text-[12px] old-mobile:text-[11px] smaller-mobile:text-[8px]  ">
                    Sunrise: <span className="font-medium ml-1 2xl:text-[28px] xl:text-[24px] lg:text-[17px] md:text-[13px] sm:text-[12px] old-mobile:text-[11px] smaller-mobile:text-[8px] smaller-mobile:ml-0 ">07:10 AM</span>
                </p>

                <p className="font-light 2xl:text-[30px] xl:text-[26px] lg:text-[19px] md:text-[15px] sm:text-[14px] old-mobile:text-[13px] smaller-mobile:text-[10px]">|</p>

                <UilSunset className="2xl:w-13 2xl:h-13 xl:w-11 xl:h-11 lg:w-10 lg:h-10 md:w-9 md:w-9 old-mobile:w-7  old-mobile:h-7  smaller-mobile:w-6 smaller-mobile:h-6"/>
                <p className="font-light 2xl:text-[28px] xl:text-[24px] lg:text-[17px] md:text-[13px] sm:text-[12px]  old-mobile:text-[11px] smaller-mobile:text-[8px]  ">
                    Sunset: <span className="font-medium ml-1 2xl:text-[28px] xl:text-[24px] lg:text-[17px] md:text-[13px] sm:text-[12px]   old-mobile:text-[11px]  smaller-mobile:ml-0  smaller-mobile:text-[8px]">05:10 PM</span>
                </p>

                <p className="font-light 2xl:text-[30px] xl:text-[26px] lg:text-[22px] md:text-[18px] sm:text-[16px] old-mobile:text-[13px] smaller-mobile:text-[10px]">|</p>

                <UilArrowUp className=" 2xl:w-13 2xl:h-13 xl:w-11 xl:h-11 lg:w-10 lg:h-10 md:w-9 md:w-9 old-mobile:w-7  old-mobile:h-7  smaller-mobile:w-6 smaller-mobile:h-6"/>
                <p className="font-light 2xl:text-[28px] xl:text-[24px] lg:text-[17px] md:text-[13px] sm:text-[12px] old-mobile:text-[11px] smaller-mobile:text-[8px]  ">
                    High: <span className="font-medium ml-1 2xl:text-[28px] xl:text-[24px] lg:text-[17px] md:text-[13px] sm:text-[12px] smaller-mobile:ml-0  old-mobile:text-[11px]   smaller-mobile:text-[8px]">32°</span>
                </p>

                <p className="font-light 2xl:text-[30px] xl:text-[26px] lg:text-[22px] md:text-[18px] sm:text-[16px] old-mobile:text-[13px] smaller-mobile:text-[10px]">|</p>

                <UilArrowDown className=" 2xl:w-13 2xl:h-13 xl:w-11 xl:h-11 lg:w-10 lg:h-10 md:w-9 md:w-9 old-mobile:w-7  old-mobile:h-7  smaller-mobile:w-6 smaller-mobile:h-6"/>
                <p className="font-light 2xl:text-[28px] xl:text-[24px] lg:text-[17px] md:text-[13px] sm:text-[12px]  old-mobile:text-[11px] smaller-mobile:text-[8px] ">
                    Low: <span className="font-medium  ml-1 smaller-mobile:ml-0 2xl:text-[28px] xl:text-[24px] lg:text-[17px] md:text-[13px]  sm:text-[12px]   old-mobile:text-[11px]  smaller-mobile:text-[8px]">32°</span>
                </p>

            </div>
        </div>
    )
}

export default TempAndDetails;