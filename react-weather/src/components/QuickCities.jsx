import React from "react";
import "./QuickCities.css"

function QuickCities() {
    const cities = [
        {
            id: 1,
            title: 'Sydney'
        },
        {
            id: 2,
            title: 'Paris'
        },
        {
            id: 3,
            title: 'New York'
        },
        {
            id: 4,
            title: 'Toronto'
        },
        {
            id: 5,
            title: 'Hyderabad'
        },

    ]
    return (
        <div className="flex items-center justify-around my-6 ">
            {cities.map((theCity) => (
                <button key={theCity.id}
                        className=" text-white  md:text-xl sm:text-lg  old-mobile:text-[13px] smaller-mobile:text-[9px] font-medium ">{theCity.title}</button>
            ))}
        </div>

    )
}

export default QuickCities;