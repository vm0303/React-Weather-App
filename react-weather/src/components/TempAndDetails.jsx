import React from 'react'
import {UilArrowDown, UilArrowUp, UilSun, UilSunset, UilTear, UilTemperature, UilWind,} from "@iconscout/react-unicons";

function TempAndDetails() {
    return (
        <div>
            <div
                className="flex items-center justify-center py-6 md:text-3xl sm:text-xl  old-mobile:text-lg smaller-mobile:text-sm text-sky-200">
                <p>Cloudy</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt=""
                     className=" lg:w-[130px] sm:w-[120px] old-mobile:w-[105px] smaller-mobile:w-[75px]"/>
                <p className=" lg:text-5xl sm:text-4xl old-mobile:text-2xl smaller-mobile:text-xl">34°</p>
                <div className="flex flex-col space-y-2">
                    <div
                        className="flex font-light items-center justify-center lg:text-[16px] sm:text-[14px] old-mobile:text-[12px] smaller-mobile:text-[8px]">
                        <UilTemperature size={18} className="m-1  smaller-mobile:w-4 smaller-mobile:h-4"/>
                        Feels like:
                        <span className="font-medium ml-1 ">32°</span>
                    </div>
                    <div
                        className="flex font-light items-center justify-center lg:text-[16px] sm:text-[14px] old-mobile:text-[12px] smaller-mobile:text-[8px]">
                        <UilTear size={18} className="mr-1   smaller-mobile:w-4 smaller-mobile:h-4"/>
                        Humidity:
                        <span className="font-medium ml-1">43%</span>
                    </div>
                    <div
                        className="flex font-light  items-center justify-center lg:text-[16px] sm:text-[14px] old-mobile:text-[12px] smaller-mobile:text-[8px]">
                        <UilWind size={18} className="mr-1    smaller-mobile:w-4 smaller-mobile:h-4"/>
                        Wind:
                        <span className="font-medium ml-1">3 mph</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white py-3">
                <UilSun className=" sm:w-6 sm:h-6 smaller-mobile:w-8 smaller-mobile:h-8"/>
                <p className="font-light sm:text-[10px] smaller-mobile:text-[8px]  ">
                    Sunrise: <span className="font-medium ml-1 sm:text-[10px] smaller-mobile:ml-0  smaller-mobile:text-[6px] ">07:10 AM</span>
                </p>
                <p className="font-light smaller-mobile:text-[10px]">|</p>

                <UilSunset className=" sm:w-6 sm:h-6 smaller-mobile:w-8 smaller-mobile:h-8"/>
                <p className="font-light sm:text-[10px] smaller-mobile:text-[8px]  ">
                    Sunset: <span className="font-medium ml-1 sm:text-[10px] smaller-mobile:ml-0  smaller-mobile:text-[6px]">05:10 PM</span>
                </p>
                <p className="font-light smaller-mobile:text-[10px]">|</p>

                <UilArrowUp className="sm:w-6 sm:h-6 smaller-mobile:w-8 smaller-mobile:h-8"/>
                <p className="font-light sm:text-[10px] smaller-mobile:text-[8px]  ">
                    High: <span className="font-medium ml-1 sm:text-[10px] smaller-mobile:ml-0  smaller-mobile:text-[6px]">32°</span>
                </p>
                <p className="font-light smaller-mobile:text-[10px]">|</p>

                <UilArrowDown className=" sm:w-6 sm:h-6 smaller-mobile:w-8 smaller-mobile:h-8"/>
                <p className="font-light sm:text-[10px] smaller-mobile:text-[8px] ">
                    Low: <span className="font-medium  ml-1 sm:text-[10px] smaller-mobile:ml-0 smaller-mobile:text-[6px]">32°</span>
                </p>

            </div>
        </div>
    )
}

export default TempAndDetails;