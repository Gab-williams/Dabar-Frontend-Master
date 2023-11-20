import React from 'react'

export default function Form() {
    return (
        <div className='w-full flex flex-row items-center justify-center'>
             <article className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 m-auto mt-16'>
                <section className='w-full  flex flex-col items-center justify-center sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-x-10'>

                    <span className='w-full sm:w-full md:w-full lg:w-2/5 flex flex-col items-center'>
                      <div className='w-full text-left capitalize'>name</div>
                      <input type='text' className='w-full p-1 border border-black mt-2 bg-blue-50'/>
                    </span>

                    <span className='w-full sm:w-full md:w-full lg:w-2/5 flex flex-col items-center'>
                      <div className='w-full text-left capitalize'>email</div>
                      <input type='text' className='w-full p-1 border border-black mt-2 bg-blue-50'/>
                    </span>
                </section>

                <section className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 flex flex-col items-center mt-4 m-auto'>
                <div className='w-full text-left capitalize'>Message</div>
                <textarea className='w-full h-52 border border-black mt-4 bg-blue-50'></textarea>

                </section>
                </article>  
        </div>
    )
}
