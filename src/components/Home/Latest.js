import React,{useRef, useEffect} from 'react'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md';
import Carousel from 'react-elastic-carousel';
import man from '../../images/man.png';
import food from '../../images/food.png';
import woman from '../../images/cell-phone-pink-background-shows-analytics-graphics-generative-ai_563818-6612 1.png';
import picfour from '../../images/robot.png';
import {AiFillPlayCircle} from 'react-icons/ai';
export default function Latest() {
    let videos = [
        {
            id:1,
         image:man
        },
        {
            id:2,
            image:food
        },
        {
            id:3,
            image:woman
        },
        {
            id:4,
            image:picfour
        }
    ];
    const carouselReFxc = useRef(null);

    useEffect(() => {
      
        if (carouselReFxc.current) {
            console.log('Carousel ref is available:', carouselReFxc.current);
          }
      }, []);

    const handleLeft =()=>{
    
        console.log('Moving to the previous slide');
        carouselReFxc.current.slidePrev();        
    }

    const handleRight =()=>{
        console.log('Moving to the next slide');
        carouselReFxc.current.slideNext();    
    
    }
    return (
        <div className='w-full flex flex-col items-center'>

             <section className='w-10/12  '>
                <article className='w-full flex flex-row items-center justify-between mt-20'>
                <span className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 '>
                      <button className='capitalize font-normal border-l-4 border-[#FD9005] text-sm px-1 '>Latest Videos</button>
                    </span>

                    <span className=' hidden sm:hidden md:hidden lg:w-1/12 lg:flex lg:flex-row lg:items-center lg:justify-between '>
                     <button data-data="left" className='bg-gray-100 px-2 py-1 rounded-md' onClick={()=>handleLeft()}><MdOutlineKeyboardArrowLeft onClick={()=>handleLeft()} className='text-black pointer-events-none text-lg'/></button>
                     <button data-data="right" className='bg-gray-100 px-2 py-1 rounded-md' onClick={()=>handleRight()}><MdOutlineKeyboardArrowRight onClick={()=>handleRight()} className='text-black pointer-events-none text-lg'/></button>
                    </span>
                </article>
                </section>   
                <div className='w-10/12'>
                     {/* large screen */}
                <article className='hidden sm:hidden md:hidden lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:mt-10'>
                    <Carousel showArrows={false} pagination={false} itemsToShow={3} ref={carouselReFxc}>
                        {videos.map((item)=>{
                     return  <div key={item.id} className='w-11/12 border border-black rounded-sm  relative h-44 grid place-content-center'>
                            <img src={item.image} className='w-full h-full ' />

                            <article className='w-full absolute bg-cover bg-black  bg-opacity-10 top-0 left-0 right-0 bottom-0 grid place-content-center'>
                                   
                            <span className='w-16 h-16 rounded-full'>
                                         <AiFillPlayCircle className='w-full h-full text-black'/>
                                   </span>

                            </article>
                        </div>
                        })}
                    </Carousel>
                 </article>
            {/* large screen */}


         {/* small screen */}

         <article className=' w-full flex flex-row items-center justify-between mt-3 sm:w-full sm:flex sm:flex-row sm:items-center sm:justify-between sm:mt-3 md:w-full md:flex md:flex-row md:items-center md:justify-between md:mt-3 lg:hidden'>
                    <Carousel showArrows={false} pagination={false} itemsToShow={1} >
                        {videos.map((item)=>{
                     return  <div key={item.id} className='w-11/12  rounded-sm  relative h-44 grid place-content-center'>
                            <img src={item.image} className='w-full h-full object-cover' />

                            <article className='w-full absolute bg-cover bg-black  bg-opacity-10 top-0 left-0 right-0 bottom-0 grid place-content-center'>
                                   
                                   <span className='w-16  h-64 rounded-full'>
                                         <AiFillPlayCircle className='w-full h-full text-black'/>
                                   </span>

                            </article>
                        </div>
                        })}
                    </Carousel>
                 </article>

         {/* small screen */}

                </div>
        </div>
    )
}
