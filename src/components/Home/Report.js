import React from 'react'
import business from '../../images/business.png';
export default function Report() {
    return (
        <div className='w-full flex flex-row items-center justify-center'>

            <section className='w-10/12 h-72 mt-20 relative'>
                <img src={business} className='w-full h-full' />

                <article className='w-full absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center bg-white bg-cover bg-opacity-10'>
                         <span className=' text-center text-xs w-11/12 sm:text-xs sm:w-11/12 md:text-sm md:w-11/12 lg:text-2xl lg:w-1/2 font-semibold capitalize text-white mt-8'> the latest it market anaysis report - october 2023</span>
                         <span className='text-xs w-11/12 sm:text-xs sm:w-11/12 md:text-sm md:w-11/12 lg:text-md lg:w-2/3 text-white text-center mt-3 font-semibold'>
                         Progressively incentiveize cooperative systems through technically sound functionlities. the productivate seemless data.
                         </span>
                         <span className='w-1/2 mt-3 flex  items-center justify-center'>
                               <button className='w-36 rounded-sm bg-white text-black capitalize py-1 px-1 text-sm sm:py-1 sm:px-1 sm:text-sm md:py-1  md:px-1 md:text-sm lg:py-4 lg:px-2 lg:text-sm text-center'>Download Report</button>
                         </span>
                </article>
            </section>
            
        </div>
    )
}
