import React from 'react'
import person from "../../images/Ellipse 169.png";
import {SiDocsdotrs} from 'react-icons/si';
import {FaBehance, FaEllipsisH} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import pic from '../../teampic/Ellipse 169.png';
import picone from '../../teampic/T-shirt guy.png'
import pictwo from '../../teampic/black girl with afro.png';
import picthree from '../../teampic/white woman with white & black bg.png';
import picfour from '../../teampic/china guy.png'
import picfive from '../../teampic/black guy.png'
import picsix from '../../teampic/black girl snap with style.png'
import picseven from '../../teampic/black guy with face pic.png'
export default function Grid() {

    const arr = [
        {
            job:'Editor',
            name:"Luci Avetisyan",
            pic:pic
        },
        {
            job:'Editor',
            name:"Luna Amadi",
            pic:picone
        },
        {
            job:'Partner',
            name:"Jide Steelheart",
            pic:pictwo
        },
        {
            job:'author',
            name:"nwachukwu obi",
            pic:picthree
        },
        {
            job:'Creator',
            name:"Adasina",
            pic:picfour
        },
        {
            job:'Photographer',
            name:"chiwe briggs",
            pic:picfive
        },
        {
            job:'writer',
            name:"folake",
            pic:picsix
        },
        {
            job:'writer',
            name:"peter avetisyan",
            pic:picseven
        },
    ]


    return (
        <section className='w-full flex flex-col items-center'>
             <div className='w-11/12 m-auto mt-20  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 place-content-center lg:space-x-1 gap-4'>
               {arr.map((item, index)=>{

                   return <section className='w-64 rounded-md m-auto sm:m-auto md:m-auto ' key={index}>
                   <div className='w-full  flex flex-col items-center bg-gray-300 rounded-sm'>
              <span className='w-full mt-2 text-center capitalize font-medium'>
                  {item.job}
               </span> 
               
               <span className='w-full mt-4 text-center capitalize font-medium'>
                  {item.name}
               </span>
   
               <span className='w-40 w-40 rounded-full mt-5'>
                   <img src={item.pic} className='w-full h-full' />
               </span>
   
               <div className='w-full mt-4 flex flex-row items-center justify-center'>
                   <article className='w-1/2 flex flex-row items-center space-x-4 py-7'>
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
   
                   </section>
               })}
             



            
            </div>
        </section>
       
    )
}
