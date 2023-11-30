import React from 'react'
import bannersmall from '../../images/add-01.png';
export default function Advert2() {
    return (
        <div className='w-full flex flex-row items-center justify-center'>

            <section className='w-8/12 h-auto mt-2 relative'>
                <img src={bannersmall} className='w-full h-full' />

                <article className='w-full absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center bg-white bg-cover bg-opacity-10'>
                      
                </article>
            </section>
            
        </div>
    )
}
