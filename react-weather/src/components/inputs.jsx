import React from 'react'
import {UilLocationPoint, UilSearch} from '@iconscout/react-unicons'


function Inputs() {
    return (
        <div className="flex flex-row justify-center my-6">
            <div className=" flex flex-row w-3/4 items-center justify-center space-x-2">
                <input placeholder="Search for city..." className="sm:text-xl old-mobile:text-[13px] smaller-mobile:text-[10px]  font-light p-2  md:w-[80%]
              sm:w-[75%] old-mobile:w-[65%] smaller-mobile:w-[60%]  focus:outline-none capitalize
            placeholder:lowercase"/>
                <UilSearch size={24} className="text-white cursor-pointer transition ease-out hover:scale-125 "/>
                <UilLocationPoint size={24} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="imperial" className="text-white font-light">°F</button>
                <p className="text-xl text-white mx-1">|</p>
                <button name="metric" className="text-white font-light">°C</button>
            </div>
        </div>
    )
}

export default Inputs;