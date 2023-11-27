import React from 'react'
import person from "../../images/Ellipse 169.png";
import { RiTwitterXLine } from "react-icons/ri";
import {FaBehance, FaEllipsisH} from 'react-icons/fa';
import { BsLinkedin } from "react-icons/bs";
import {AiFillGithub} from 'react-icons/ai'
export default function Author(props) {
    const {writer} = props
    return (
        <div className='w-full  flex flex-col items-center bg-gray-100 border border-gray-400 mt-9 sm:mt-5 md:mt-5 lg:mt-0'>
            
           

            <span className='w-20 rounded-full mt-5'>
                <img src={person} className='w-full h-full' />
            </span>
            <span className='w-full mt-4 text-black text-center capitalize font-medium'>
              {Object.keys(writer).length > 0? writer.name:""}
            </span>

            <div className='w-full mt-2 flex flex-row items-center justify-center'>
                <article className='w-2/3 sm:w-2/3 md:w-2/3 lg:w-2/5 m-auto flex flex-row items-center justify-center space-x-4 py-7'>
                    <div className='w-6 h-6 rounded-full grid place-content-center '>
                     <BsLinkedin className=' text-lg'/>
                    </div>

                    <div className='w-6 h-6 rounded-full grid place-content-center'>
                     <RiTwitterXLine className=' text-lg'/>
                    </div>

                </article>
            </div>
        </div>
    )
}
