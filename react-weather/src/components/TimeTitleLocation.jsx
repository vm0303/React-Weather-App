import React from 'react'

function TimeTitleLocation() {
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white  xl:text-2xl md:text-xl  sm:text-lg old-mobile:text-[14px] smaller-mobile:text-[10px] font-light">
                    Tuesday, Feb 24 2022 | Local time: 1:44 AM
                </p>
            </div>
            <div className="flex items-center justify-center my-3">

                <p className="text-white xl:text-4xl md:text-3xl sm:text-2xl old-mobile:text-xl smaller-mobile:text-lg font-medium">Edison,
                    NJ</p>

            </div>
        </div>
    )
}

export default TimeTitleLocation;