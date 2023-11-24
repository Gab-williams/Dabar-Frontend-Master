import React from 'react'
import content from '../../images/content-single.png'
export default function Hero(props) {
    const {whole, writer, category} = props
    // console.log(whole)
    return (
        <div className='w-full flex flex-col items-center justify-center'>

              <section className='w-full text-lg sm:w-full sm:text-lg md:w-2/3 md:text-2xl lg:w-2/3 lg:text-6xl p-1 capitalize font-semibold m-auto mt-10'>
               {Object.keys(whole).length > 0?whole.heading:""}
             </section> 
             <section className='w-full sm:w-full md:w-3/4 lg:w-2/3'>
                <div className='w-full'>
                    <section className='w-full sm:w-full md:w-11/12 lg:w-10/12 float-left flex flex-row items-center space-x-2 mt-3'>
                        <button className='h-full py-1 p-1 text-white text-sm capitalize text-center bg-[#FD9005] w-24'>{Object.keys(category).length > 0?category.category:""}</button>
                        <a className='text-xs font-bold sm:w-24 lg:w-32'>by {Object.keys(writer).length > 0?writer.name:""}</a>
                        <a className='text-xs font-semibold'>-</a>
                        <a className='text-xs font-bold sm:w-24'>2 minute read</a>
                        <a className='text-xs font-semibold'>-</a>
                        <a className='text-xs font-thin sm:w-24'>july 14, 2022</a>
                    </section>
                </div>
             </section>

             <article className='w-11/12 h-64 sm:w-11/12 sm:h-64  md:w-10/12 md:h-96 lg:w-10/12 lg:h-96 mt-14'>
                <img src={content} className='w-full h-full'/>
             </article>
        </div>
    )
}
