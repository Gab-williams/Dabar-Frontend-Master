import React from 'react'
import banner from '../../images/banner-03.png';
export default function Advert() {
    return (
        <div className='w-full flex flex-row items-center justify-center'>

            <section className='w-10/12 h-50 mt-10 relative'>
                <img src={banner} className='w-full h-full' />

                <article className='w-full absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center bg-white bg-cover bg-opacity-10'>
                      
                </article>
            </section>
            
        </div>
    )
}
