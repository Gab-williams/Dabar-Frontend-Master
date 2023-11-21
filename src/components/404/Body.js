import React from 'react'
import {FaSadTear} from "react-icons/fa"
export default function Body() {
    return (
        <div className='w-full items-center justify-center  h-80'>

            <section className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 m-auto'>
                <span className='w-full flex justify-center items-center  mt-24'>
                              <FaSadTear className='text-4xl'/>
                </span>
                <span className='w-full flex justify-center items-center text-center text-3xl sm:text-3xl md:text-3xl lg:text-5xl capitalize font-semibold  mt-3'>
                Sorry, page not found
                </span>
                <span className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-1/2 m-auto mt-3 text-sm flex justify-center text-center font-medium'>
                we are very sorry for the inconvenience it looks like 
                you're trying to access a page that has deleted or never even existed
                </span>

                <span className='w-1/2 m-auto mt-4 text-sm flex justify-center text-center font-medium'>
                    <button className=' text-lg bg-[#FD9005] text-white  capitalize p-3 rounded-sm'>
                        Back to home
                    </button>
                </span>

            </section>
            
        </div>
    )
}
