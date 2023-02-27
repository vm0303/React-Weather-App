import React from 'react'

function Forecast({title}) {
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

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[16px] sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[9px]">04:30PM</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt=""
                         className=" xl:w-16 lg:w-14 md:w-10 old-mobile:w-8  smaller-mobile:w-5  smaller-mobile:my-1"
                    />
                    <p className="font-medium 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[16px]  sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[9px]">22°</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[16px] sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[9px]">04:30PM</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt=""
                         className=" xl:w-16 lg:w-14 md:w-10 old-mobile:w-8  smaller-mobile:w-5  smaller-mobile:my-1"
                    />
                    <p className="font-medium 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[16px]  sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[9px]">22°</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[16px] sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[9px]">04:30PM</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt=""
                         className=" xl:w-16 lg:w-14 md:w-10 old-mobile:w-8  smaller-mobile:w-5  smaller-mobile:my-1"
                    />
                    <p className="font-medium 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[16px]  sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[9px]">22°</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[16px] sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[9px]">04:30PM</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt=""
                         className=" xl:w-16 lg:w-14 md:w-10 old-mobile:w-8  smaller-mobile:w-5  smaller-mobile:my-1"
                    />
                    <p className="font-medium 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[16px]  sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[9px]">22°</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[16px] sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[9px]">04:30PM</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt=""
                         className=" xl:w-16 lg:w-14 md:w-10 old-mobile:w-8  smaller-mobile:w-5  smaller-mobile:my-1"
                    />
                    <p className="font-medium 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[16px]  sm:text-[14px] old-mobile:text-[11px] smaller-mobile:text-[9px]">22°</p>
                </div>
            </div>
        </div>
    )
}

export default Forecast;