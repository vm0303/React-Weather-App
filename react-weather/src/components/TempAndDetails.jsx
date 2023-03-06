import React from 'react'
import {UilArrowDown, UilArrowUp, UilSun, UilSunset, UilTear, UilTemperature, UilWind,} from "@iconscout/react-unicons";
import {formatToLocalTime, iconURLFromCode} from "../services/theWeatherService";

function TempAndDetails(
    {
        weather: {
            details,
            icon,
            temp,
            temp_min,
            temp_max,
            sunrise,
            sunset,
            speed,
            humidity,
            feels_like,
            timezone
        },
        units
    }) {
    const tempUnit = units === 'imperial' ? '°F' : '°C'
    const windSpeedUnit = units === 'imperial' ? 'mph' : 'm/s'


    return (
        <div>
            <div
                className="flex items-center justify-center py-3 2xl:text-[59px] xl:text-[47px] lg:text-[35px] md:text-[29px]  media-screen440:text-[23px] nexus-mobiles:text-[21px] old-mobile:text-[18px] smaller-mobile:text-[15px] text-sky-200">
                <p>{details}</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src={iconURLFromCode(icon)}
                     alt="An icon that shows what kind of weather a particular city has today."
                     className=" 2xl:w-[230px] xl:w-[175px] lg:w-[150px] md:w-[130px] sm:w-[120px] media-screen440:w-[105px] nexus-mobiles:w-[80px] samsung-phones:w-[75px] old-mobile:w-[70px] smaller-mobile:w-[60px]"/>
                <p className="2xl:text-[56px]  xl:text-[44px]  lg:text-[32px] md:text-[26px] media-screen440:text-[20px] nexus-mobiles:text-[18px] old-mobile:text-[15px] smaller-mobile:text-[12px]
                                2xl:-ml-5 xl:ml-1 lg:ml-0.5 md:-ml-1 sm:ml-1.5  media-screen440:mr-1.5 nexus-mobiles:mr-1.5 samsung-phones:ml-0 old-mobile:ml-1 smaller-mobile: ml-0 ">{` ${temp.toFixed()} ${tempUnit} `}</p>
                <div className="flex flex-col space-y-1">
                    <div
                        className="flex font-light items-center justify-center 2xl:text-[23px] xl:text-[20px] lg:text-[17px] sm:text-[14px] media-screen440:text-[11px] old-mobile:text-[8px] smaller-mobile:text-[6px] ">
                        <UilTemperature size={18}
                                        className="mr-1 2xl:w-10 2xl:w-10 xl:w-7 xl:h-7 lg:w-5 lg:h-5  media-screen440:w-4 media-screen440:h-4  smaller-mobile:w-3 smaller-mobile:h-3"/>
                        Feels like:
                        <span className="font-medium ml-1">{` ${feels_like.toFixed()}  ${tempUnit}`}</span>
                    </div>
                    <div
                        className="flex font-light items-center justify-center 2xl:text-[23px] xl:text-[20px] lg:text-[17px] sm:text-[14px] media-screen440:text-[11px] old-mobile:text-[8px] smaller-mobile:text-[6px]">
                        <UilTear size={18}
                                 className="mr-1 2xl:w-10 2xl:w-10 xl:w-7 xl:h-7 lg:w-5 lg:h-5   media-screen440:w-4 media-screen440:h-4 smaller-mobile:w-3 smaller-mobile:h-3"/>
                        Humidity:
                        <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div
                        className="flex font-light items-center justify-center 2xl:text-[23px] xl:text-[20px] lg:text-[17px] sm:text-[14px] media-screen440:text-[11px] old-mobile:text-[8px] smaller-mobile:text-[6px]">
                        <UilWind size={18}
                                 className="mr-1 2xl:w-10 2xl:w-10 xl:w-7 xl:h-7 lg:w-5 lg:h-5 media-screen440:w-4 media-screen440:h-4  smaller-mobile:w-3 smaller-mobile:h-3"/>
                        Wind:
                        <span className="font-medium ml-1">{`${speed.toFixed()} ${windSpeedUnit}`}</span>
                    </div>
                </div>
            </div>


            <div
                className="flex flex-row items-center justify-center  lg:space-x-2 md:space-x-1.5 sm:space-x-3 media-screen536:space-x-2 media-screen440:space-x-1.5 nexus-mobiles:space-x-2 old-mobile:space-x-1 mobile-s:space-x-1.5 smaller-mobile:space-x-1 text-white py-3">
                <UilSun
                    className=" 2xl:w-10 2xl:h-10 xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:w-7 md:w-7 media-screen536:w-10 media-screen536:h-10 media-screen440:w-9 media-screen440:h-9  nexus-mobiles:w-8 nexus-mobiles:h-8 old-mobile:w-7 old-mobile:h-7  smaller-mobile:w-6 smaller-mobile:h-6"/>
                <p className="font-light 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[14px]  media-screen536:text-[16px] media-screen440:text-[13px]  old-mobile:text-[10px]  smaller-mobile:text-[8px]  ">
                    Sunrise: <span
                    className="font-medium ml-1 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[14px]  media-screen536:text-[16px] media-screen440:text-[13px]  old-mobile:text-[10px]  smaller-mobile:text-[8px] smaller-mobile:ml-0 ">{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
                </p>

                <p className="font-light 2xl:text-[34px] xl:text-[31px] lg:text-[27px] md:text-[24px] sm:text-[21px]  media-screen536:text-[18px] media-screen440:text-[15px] old-mobile:text-[12px] smaller-mobile:text-[9px]">|</p>


                <UilSunset
                    className="2xl:w-10 2xl:h-10 xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:w-7 md:w-7 media-screen536:w-10 media-screen536:h-10 media-screen440:w-9 media-screen440:h-9  nexus-mobiles:w-8 nexus-mobiles:h-8 nexus-mobiles:w-8 nexus-mobiles:h-8 old-mobile:w-7 old-mobile:h-7  smaller-mobile:w-6 smaller-mobile:h-6"/>
                <p className="font-light 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[14px]  media-screen536:text-[16px] media-screen440:text-[13px]   old-mobile:text-[10px]  smaller-mobile:text-[8px]  ">
                    Sunset: <span
                    className="font-medium ml-1 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[14px]  media-screen536:text-[16px] media-screen440:text-[13px]   old-mobile:text-[10px]  smaller-mobile:text-[8px]  smaller-mobile:ml-0  ">{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
                </p>

                <p className="font-light 2xl:text-[34px] xl:text-[31px] lg:text-[27px] md:text-[24px] sm:text-[21px]  media-screen536:text-[18px] media-screen440:text-[15px]  old-mobile:text-[12px] smaller-mobile:text-[9px]">|</p>

                <UilArrowUp
                    className="2xl:w-10 2xl:h-10 xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:w-7 md:w-7 media-screen536:w-10 media-screen536:h-10 media-screen440:w-9 media-screen440:h-9  nexus-mobiles:w-8 nexus-mobiles:h-8  nexus-mobiles:w-8 nexus-mobiles:h-8 old-mobile:w-7 old-mobile:h-7  smaller-mobile:w-6 smaller-mobile:h-6"/>
                <p className="font-light 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[14px]  media-screen536:text-[16px] media-screen440:text-[13px]   old-mobile:text-[10px]  smaller-mobile:text-[8px]  ">
                    High: <span
                    className="font-medium ml-1 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[14px]  media-screen536:text-[16px] media-screen440:text-[13px]   old-mobile:text-[10px]  smaller-mobile:text-[8px]  smaller-mobile:ml-0 ">{`${temp_max.toFixed()}  ${tempUnit} `}</span>
                </p>

                <p className="font-light 2xl:text-[34px] xl:text-[31px] lg:text-[27px] md:text-[24px] sm:text-[21px]  media-screen536:text-[18px] media-screen440:text-[15px]  old-mobile:text-[12px] smaller-mobile:text-[9px]">|</p>

                <UilArrowDown
                    className="2xl:w-10 2xl:h-10 xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:w-7 md:w-7 media-screen536:w-10 media-screen536:h-10 media-screen440:w-9 media-screen440:h-9  nexus-mobiles:w-8 nexus-mobiles:h-8  nexus-mobiles:w-8 nexus-mobiles:h-8 old-mobile:w-7 old-mobile:h-7  smaller-mobile:w-6 smaller-mobile:h-6"/>
                <p className="font-light 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[14px]  media-screen536:text-[16px] media-screen440:text-[13px]   old-mobile:text-[10px]  smaller-mobile:text-[8px]">
                    Low: <span
                    className="font-medium  ml-1 smaller-mobile:ml-0 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[14px]  media-screen536:text-[16px]  media-screen440:text-[13px]   old-mobile:text-[10px] smaller-mobile:text-[8px] smaller-mobile:ml-0">{`${temp_min.toFixed()}  ${tempUnit} `}</span>
                </p>

            </div>
        </div>
    )
}

export default TempAndDetails;