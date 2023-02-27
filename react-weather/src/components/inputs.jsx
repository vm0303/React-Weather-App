import React from 'react'
import {UilLocationPoint, UilSearch} from '@iconscout/react-unicons'


function Inputs() {
    return (
        <div className="flex flex-row justify-center my-6">
            <div className=" flex flex-row w-3/4 items-center justify-center space-x-2">
                <input placeholder="Search for a city..." className=" 2xl:text-3xl xl:text-xl lg:text-lg sm:text-md old-mobile:text-[13px] smaller-mobile:text-[10px]  font-light p-2  lg:w-[75%]
              sm:w-[75%] old-mobile:w-[65%] smaller-mobile:w-[60%]  focus:outline-none capitalize
            placeholder:lowercase"/>
                <UilSearch size={24} className="text-white  2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-7 sm:h-7  sm:w-6 sm:h-6 smaller-mobile:w-5 smaller-mobile:h-5 cursor-pointer transition ease-out hover:scale-125 "/>
                <UilLocationPoint size={24} className="text-white 2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-7 sm:h-7  sm:w-6 sm:h-6 smaller-mobile:w-5 smaller-mobile:h-5 cursor-pointer transition ease-out hover:scale-125"/>
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="imperial" className="text-white 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl  old-mobile:text-md  smaller-mobile:text-sm  font-light">°F</button>
                <p className=" 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl text-white mx-1">|</p>
                <button name="metric" className="text-white 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl old-mobile:text-md  smaller-mobile:text-sm font-light">°C</button>
            </div>
        </div>
    )
}

export default Inputs;