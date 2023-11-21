import React from 'react'
import content from '../../images/content-single.png'
export default function Hero() {
    return (
        <div className='w-full flex flex-col items-center justify-center'>

              <section className='w-full text-lg sm:w-full sm:text-lg md:w-2/3 md:text-2xl lg:w-3/4 lg:text-4xl p-1 capitalize font-bold m-auto mt-20'>
              How will the new FX policy affect FMCGs and consumers?
              <p class="font-medium text-black-300 pt-3 md:text-lg">This deep dive assesses how Nigeria's exchange rate reform will impact FMCG companies and everyday consumers.</p>
             </section> 
            
             <section className='w-full sm:w-full md:w-3/4 lg:w-3/4  '>
                <div className='w-full'>
                    <section className='w-full sm:w-full md:w-11/12 lg:w-auto float-left flex flex-row items-center space-x-2 mt-6'>
                        <button className='h-full py-1 p-1 text-white text-sm capitalize text-center bg-[#FD9005] w-24'>lifestyle</button>
                        <a className='text-md font-regular sm:w-24 lg:w-auto'>by Joanna Wellick</a>
                        <a className='text-md font-regular'>-</a>
                        <a className='text-md font-regular sm:w-24 lg:w-auto'>2 minute read</a>
                        <a className='text-md font-regular'>-</a>
                        <a className='text-md font-regular sm:w-24 lg:w-auto'>July 14, 2022</a>
                    </section>
                </div>
             </section>

             <article className='w-11/12 h-64 sm:w-11/12 sm:h-64  md:w-10/12 md:h-96 lg:w-10/12 lg:h-96 mt-14'>
                <img src={content} className='w-full h-full'/>
             </article>
        </div>
    )
}
