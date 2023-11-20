import React from 'react'

export default function Subscrib() {
    return (
        <div className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 flex flex-col items-center m-auto bg-black mt-5 py-5'>

            <section className='w-full flex flex-col items-center justify-center mt-4'>
               <h2 className='text-lg sm:text-lg md:text-lg lg:text-5xl capitalize font-bold text-white'>Sign up for our newsletters</h2>
                <p className='text-xs sm:text-sm md:text-sm lg:text-base capitalize font-bold text-white mt-3'>get notified of the best newletter</p>
            </section>

            <div className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-3/5 mt-5'>
                <article className='w-full flex flex-row items-center justify-center space-x-3'>
                     <span className='w-2/5'>
                        <input type='text' className='p-3 border border-white outline-0 w-full bg-black' placeholder='Enter Your Email'/>
                     </span>
                     <span className='w-2/5'>
                        <button className='w-full text-lg bg-[#FD9005] text-white p-3 rounded-sm'>subscribe</button>
                     </span>
                </article>
            </div>


            <div className='w-11/12 sm:11/12 md:w-11/12 lg:w-3/4'>
                <section className='w-full flex flex-row items- space-x-2 mt-6'>
                    <span className='w-1/6'>
                    <span className='w-20 float-right'><input type="checkbox"  className='w-full p-2 bg-black border border-white'/></span>
                    </span>
                    <span className='w-11/12 text-xs capitalize text-white'>
                    by checking this box, you confirm that you have read and are agreeing to our term of use regarding the storage of the data submtted through this form
                    </span>
                </section>
            </div>
            
        </div>
    )
}
