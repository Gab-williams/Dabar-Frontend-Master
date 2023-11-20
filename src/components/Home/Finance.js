import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import picfive from '../../images/medical.png';
import picsix from '../../images/Group 237606.png';
import picseven from '../../images/computer.png';
import piceight from '../../images/phone.png';

export default function Finance() {
     const finance = [        {
        id:5,
        catgories:'Health & Fitness',
        author:'alec whitten',
        date:'1 jan 2023',
        pic:picfive,
        heading:`Federal Reserve Announces Interest Rate Hike citing
        inflation concern`,
        body:`Like to Know the secret of transforming a 
        2-14 into Super Bowl winning Dynasty`,  
    },
    {
        id:6,
        catgories:'LifeStyle',
        author:'alec whitten',
        date:'1 jan 2023',
        pic:picsix,
        heading:`Federal Reserve Announces Interest Rate Hike citing
        inflation concern`,
        body:`Like to Know the secret of transforming a 
        2-14 into Super Bowl winning Dynasty`,  
    },

    {
        id:7,
        catgories:'Technology',
        author:'alec whitten',
        date:'1 jan 2023',
        pic:picseven,
        heading:'Tech Giants Apple and Amazon Beat Q3 Earning Expectations',
        body:`Like to Know the secret of transforming a 
        2-14 into Super Bowl winning Dynasty`, 
    },
    {
        id:8,
        catgories:'Finance',
        author:'alec whitten',
        date:'1 jan 2023',
        pic:piceight,
        heading:'Tech Giants Apple and Amazon Beat Q3 Earning Expectations',
        body:`Like to Know the secret of transforming a 
        2-14 into Super Bowl winning Dynasty`, 
    }
]
    return (
        <div className='w-full flex flex-col items-center mb-20'>
                     <section className='w-10/12  '>
                <article className='w-full flex flex-row items-center justify-between mt-20 '>
                    <span className='w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/6'>
                      <button className='capitalize font-normal border-l-4 border-[#FD9005] text-sm px-1 '>Finance Pick</button>
                    </span>

                     <button className='hidden sm:hidden md:capitalize md:font-normal  md:bg-gray-300 md:flex md:flex-row md:items-center md:space-x-1 md:text-sm md:px-1 md:py-1 md:rounded-sm lg:capitalize lg:font-normal  lg:bg-gray-100 lg:flex lg:flex-row lg:items-center lg:text-black lg:space-x-1 lg:text-xs lg:pl-4 lg:px-2 lg:py-2 lg:rounded-md' ><a className='capitalize text-xs'>Show All</a> <a><MdOutlineKeyboardArrowRight/></a></button>
                  
                </article>
                </section> 
                <div className='w-10/12 mt-4'>
            <article className='w-full grid grid-cols-1 gap-9 place-content-center sm:w-full sm:grid sm:grid-cols-1 sm:gap-9  sm:place-content-between  md:w-full md:grid md:grid-cols-1 md:gap-3 md:space-x-4 md:place-content-center lg:w-full lg:grid lg:grid-cols-4 lg:gap-y-14 lg:space-x-4 lg:place-content-center'>
                  {finance.map((item)=>{

                    return  <section className='m-auto w-full sm:m-auto sm:w-full md:m-auto md:w-full lg:w-64' key={item.id}>
                   <div className=" w-full flex flex-row space-x-4 items-center p-1 sm:w-full sm:space-x-1 sm:flex sm:flex-row sm:items-center sm:p-1 md:w-full md:space-x-1 md:flex md:flex-row md:items-center md:p-1 lg:w-full lg:flex lg:flex-col lg:items-center lg:p-1">
                  <section className="   w-56 relative sm:w-56 sm:relative md:w-60  md:relative  lg:w-full lg:relative">
                  <img
                      src={item.pic}
                      className="w-full h-24 sm:h-24 md:h-32 lg:h-40"
                    />
                            <article className='w-full absolute top-0 left-0 right-0 bottom-0 bg-cover bg-black bg-opacity-10'>
                         <div className='w-full mt-4 ml-3'>
                            <button className='px-2.5 py-1 font-medium capitalize text-white bg-[#FD9005] text-xs hidden sm:block md:block lg:block'>
                              {item.catgories}
                            </button>
                         </div>
                        </article>
                       </section>


                       <section className='w-10/12 flex flex-col items-center  sm:w-11/12 sm:flex sm:flex-col sm:items-center md:w-11/12 md:flex md:flex-col md:items-center  lg:w-full lg:flex lg:flex-col lg:items-center'>
                        
                       <div className='w-full mt-4'>
                           <span className='flex flex-row w-full sm:w-full md:w-full lg:w-3/4 float-left capitalize font-medium text-xs space-x-1'><a>alec whitten</a> <a>.</a> <a>1 jan 2023</a></span>
                       </div>

                       <section className='w-full text-xs mt-1 sm:text-xs sm:mt-1 md:text-xs md:mt-1 lg:text-xs lg:mt-3 font-semibold text-left capitalize'>
                         {item.heading}
                       </section>

                       <article className='text-xs mt-1 hidden sm:block md:hidden lg:block lg:text-xs lg:mt-3 w-full text-left capitalize text-gray-500'>
                          {item.body}
                       </article>
                        </section>

                    </div>
               </section>

                  })}



            </article>
        </div>

        </div>
    )
}
