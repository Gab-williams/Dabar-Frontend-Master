import React from 'react'
import { BiMoviePlay } from "react-icons/bi";
export default function Top() {
    return (
        <div className='hidden sm:hidden md:hidden lg:flex lg:flex-col lg:items-center lg:justify-center'>

              <span className='w-1/12 mt-14 flex flex-col items-center justify-center'>
              <BiMoviePlay className="h-10 w-full text-2xl" />
              <h2 className='text-lg font-semibold text-black'>videos</h2>
                </span>  

                <span className='w-2/5 text-center font-semibold text-black text-sm m-auto'>
                Progressively incentivize cooperative systems through technically sound functionalities. 
                The credibly productivate seamless data.
                </span>
        </div>
    )
}
