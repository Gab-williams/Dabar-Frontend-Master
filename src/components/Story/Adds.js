import React from 'react'
import pic from '../../related img/afro.png'
import picone from '../../related img/boxing.png'
export default function Adds() {
    return (
        <div className='w-full mt-3'>
             <section className='w-full text-lg  font-medium border-l-2 border-[#FD9005] px-2'>
                      Adds
            </section>

            <ul className='w-full  flex flex-col sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row items-center justify-between'>

                <li className='w-full flex flex-row items-center mt-3'>
                      <span className='w-1/3'>
                       <img src={pic} className='w-24 h-full rounded-sm'/>
                      </span>
                      <span className='w-2/3 flex flex-col items-center'>
                        <div className='w-full'>
                        <button className='text-xs  float-left text-white px-2 py-2 bg-[#FD9005]'>culture</button>
                        </div>
                        <div className='w-full text-xs capitalize font-semibold mt-2'>
                        AfroNation Lagos Event Cancellation Shake Up The Music Scene
                        </div>
                          
                      </span>
                </li>


                <li className='w-full flex flex-row items-center mt-3'>
                      <span className='w-1/3'>
                       <img src={picone} className='w-24 h-full rounded-sm'/>
                      </span>
                      <span className='w-2/3 flex flex-col items-center'>
                        <div className='w-full'>
                        <button className='text-xs  float-left px-2 text-white py-2 bg-[#FD9005]'>Boxing</button>
                        </div>
                        <div className='w-full text-xs capitalize font-semibold mt-2'>
                        Rising Stars Of The Ring: Female Boxer Making Waves In The Sport
                        </div>
                          
                      </span>
                </li>

               </ul>
        </div>
    )
}
