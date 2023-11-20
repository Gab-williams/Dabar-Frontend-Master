import React from 'react'
import {BiSolidMessageRoundedDetail} from 'react-icons/bi'
export default function Comment() {
    return (
        <div className='w-full flex flex-col items-center mt-4'>
            <section className='w-full text-base font-medium capitalize text-left px-2 border-l-4 border-[#FD9005]'>
                      Add a Comment
            </section>

            <textarea className='w-full h-52 rounded-md bg-blue-50 mt-7 outline-0 border-0 p-2'>

            </textarea>

            <section className='w-full mt-2'>
                <button className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#FD9005] text-white py-3 px-2 float-right flex flex-row items-center justify-between'><a><BiSolidMessageRoundedDetail className='text-sm'/></a> <a className='text-xs sm:text-xs md:text-xs lg:text-sm'>send comment</a></button>
            </section>
        </div>
    )
}
 