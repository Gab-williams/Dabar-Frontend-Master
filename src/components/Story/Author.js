import React from 'react'
import person from "../../images/Ellipse 169.png";
import {SiDocsdotrs} from 'react-icons/si';
import {FaBehance, FaEllipsisH} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai'
export default function Author() {
    return (
        <div className='w-full  flex flex-col items-center bg-gray-300 rounded-sm mt-9 sm:mt-5 md:mt-5 lg:mt-0'>
           <span className='w-full mt-2 text-center capitalize font-medium'>
               Author
            </span> 
            
            <span className='w-full mt-4 text-center capitalize font-medium'>
              Luci Avetisyan
            </span>

            <span className='w-40 w-40 rounded-full mt-5'>
                <img src={person} className='w-full h-full' />
            </span>

            <div className='w-full mt-4 flex flex-row items-center justify-center'>
                <article className='w-2/3 sm:w-2/3 md:w-2/3 lg:w-2/5 m-auto flex flex-row items-center justify-center space-x-4 py-7'>
                    <div className='w-6 h-6 rounded-full grid place-content-center bg-black border border-black '>
                     <SiDocsdotrs className=' text-xs  text-white'/>
                    </div>

                    <div className='w-6 h-6 rounded-full grid place-content-center bg-black border border-black '>
                     <FaBehance className=' text-xs  text-white'/>
                    </div>

                    <div className='w-6 h-6 rounded-full grid place-content-center bg-black border border-black '>
                     <AiFillGithub className=' text-xs  text-white'/>
                    </div>

                    {/* FaEllipsisH */}

                    <div className='w-6 h-6 rounded-full grid place-content-center bg-black border border-black '>
                     <FaEllipsisH className=' text-xs  text-white'/>
                    </div>
                </article>
            </div>
        </div>
    )
}
