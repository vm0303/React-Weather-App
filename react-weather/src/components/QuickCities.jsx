import React from "react";


function QuickCities({setQuery}) {
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
                        className=" text-white 2xl:text-3xl lg:text-2xl  md:text-xl sm:text-lg old-mobile:text-[11px] smaller-mobile:text-[9px] font-medium"
                        onClick={() => setQuery({q: theCity.title})}>
                    {theCity.title}</button>
            ))}
        </div>

    )
}

export default QuickCities;