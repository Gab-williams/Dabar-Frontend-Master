import React,{useRef, useEffect, useState} from 'react';
// import Carousel from 'react-elastic-carousel';
import Carousel from 'react-elastic-carousel';
import imgtwo from '../../images/multiethnic.png';
export default function Slider(props) {
    const {sunmoon} = props
     
    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
   
    useEffect(() => {
        const intervalId = setInterval(() => {
          if (carouselRef.current) {
            const totalSlides = carouselRef.current.props.children.length;
            const nextSlide = (currentSlide + 1) % totalSlides;
    
            carouselRef.current.goTo(nextSlide);
            setCurrentSlide(nextSlide);
          }
        }, 3000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [currentSlide]);
      
      

    return (
        <div className='w-full flex  items-center justify-center'>
     {/* large screen */}
            <article className={!sunmoon?'hidden sm:hidden md:hidden lg:w-11/12 lg:mt-10 lg:p-6 lg:block':'hidden sm:hidden md:hidden lg:w-11/12 lg:mt-10 lg:p-6 lg:block'} >
                <Carousel ref={carouselRef} onSlideChange={currentSlide => setCurrentSlide(currentSlide)} showArrows={false} pagination={false} itemsToShow={3}  itemsToScroll={1} spaceBetween={10} className='w-full '>
                     <div className='w-[97%]  h-100  rounded-md grid place-content-center text-2xl text-black relative'>
                           <img src={imgtwo} className='w-full h-full' />
                           <article className='w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 '>
                            <div className='w-full mt-6 ml-4'>
                            <button className='w-20 h-6 text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white'>Lifestyle</button>
                            </div>

                            <div className='w-full flex flex-col ml-4 absolute bottom-8'>
                                <article className='w-4/5 sm:w-4/5 md:w-2/3 lg:w-2/5 flex flex-row items-center space-x-1 text-white'>
                                    <a className='text-xs font-medium'>2 min</a>
                                    <a className='text-xs font-medium'>-</a>
                                    <a className='text-xs font-medium'>27 Dec 2023</a>
                                </article>
                                <section className='w-4/5 text-lg  text-white font-semibold capitalize'>
                                    Top 10 Must-Visit Destinations For 2023
                                </section>
                            </div>

                           </article>
                     </div>

                     <div className='w-[97%]  h-100  rounded-md grid place-content-center text-2xl text-black relative'>
                        <img src={imgtwo} className='w-full h-full' />

                        <article className='w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 '>
                            <div className='w-full mt-6 ml-4'>
                            <button className='w-20 h-6 text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white'>Finance</button>
                            </div>

                            <div className='w-full flex flex-col ml-4 absolute bottom-8'>
                                <article className='w-2/5 flex flex-row items-center space-x-1 text-white'>
                                    <a className='text-xs font-medium'>2 min</a>
                                    <a className='text-xs font-medium'>-</a>
                                    <a className='text-xs font-medium'>27 Dec 2023</a>
                                </article>
                                <section className='w-4/5 text-lg  text-white font-semibold capitalize'>
                                    Gold Price Surge Amid Uncertainty and Inflation Concern
                                </section>
                            </div>

                           </article>
                     </div>

                     <div className='w-[97%]  h-100 rounded-md grid place-content-center text-2xl text-black relative'>
                       <img src={imgtwo} className='w-full h-full' />

                       <article className='w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 '>
                            <div className='w-full mt-6 ml-4'>
                            <button className='w-20 h-6 text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white'>Technology</button>
                            </div>

                            <div className='w-full flex flex-col ml-4 absolute bottom-8'>
                                <article className='w-2/5 flex flex-row items-center space-x-1 text-white'>
                                    <a className='text-xs font-medium'>2 min</a>
                                    <a className='text-xs font-medium'>-</a>
                                    <a className='text-xs font-medium'>27 Dec 2023</a>
                                </article>
                                <section className='w-4/5 text-lg  text-white font-semibold capitalize'>
                                    Nigeria To Start Producing Eletric Vechices By 2024
                                </section>
                            </div>

                           </article>
                     </div>

                     <div className='w-[97%] h-100  rounded-md grid place-content-center text-2xl text-black relative'>
                     <img src={imgtwo} className='w-full h-full' />

                     <article className='w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 '>
                            <div className='w-full mt-6 ml-4'>
                            <button className='w-20 h-6 text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white'>Lifestyle</button>
                            </div>

                            <div className='w-full flex flex-col ml-4 absolute bottom-8'>
                                <article className='w-2/5 flex flex-row items-center space-x-1 text-white'>
                                    <a className='text-xs font-medium'>2 min</a>
                                    <a className='text-xs font-medium'>-</a>
                                    <a className='text-xs font-medium'>27 Dec 2023</a>
                                </article>
                                <section className='w-4/5 text-lg  text-white font-semibold capitalize'>
                                    Top 10 Must-Visit Destinations For 2023
                                </section>
                            </div>

                           </article>
                     </div>

                     <div className='w-[97%]  h-100  rounded-md grid place-content-center text-2xl text-black relative'>
                     <img src={imgtwo} className='w-full h-full' />
                     <article className='w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 '>
                            <div className='w-full mt-6 ml-4'>
                            <button className='w-20 h-6 text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white'>Finance</button>
                            </div>

                            <div className='w-full flex flex-col ml-4 absolute bottom-8'>
                                <article className='w-2/5 flex flex-row items-center space-x-1 text-white'>
                                    <a className='text-xs font-medium'>2 min</a>
                                    <a className='text-xs font-medium'>-</a>
                                    <a className='text-xs font-medium'>27 Dec 2023</a>
                                </article>
                                <section className='w-4/5 text-lg  text-white font-semibold capitalize'>
                                    Gold Price Surge Amid Uncertainty and Inflation Concern
                                </section>
                            </div>

                           </article>
                     </div>
                     </Carousel>
            </article>
             {/* large screen  */}



             <article className={!sunmoon?'w-full mt-10 border-b border-black p-6  sm:w-full sm:mt-10 sm:border-b sm:border-gray sm:p-6  md:w-full md:mt-10 md:border-b md:border-gray md:p-6 lg:hidden':'w-full mt-10 border-b border-white p-6 sm:w-11/12 sm:mt-10 sm:border-g sm:border-white sm:p-6 md:w-11/12 md:mt-10 md:border-b md:border-white md:p-6 lg:hidden'} >
                <Carousel ref={carouselRef} onSlideChange={currentSlide => setCurrentSlide(currentSlide)} showArrows={false} pagination={false} itemsToShow={1.5}  itemsToScroll={1} spaceBetween={10} className='w-full '>
                     <div className='w-[97%]  h-96  rounded-md grid place-content-center text-2xl text-black relative'>
                           <img src={imgtwo} className='w-full h-full' />
                           <article className='w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 '>
                            <div className='w-full mt-6 ml-4'>
                            <button className='w-20 h-6 text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white'>Lifestyle</button>
                            </div>

                            <div className='w-full flex flex-col ml-4 absolute bottom-8'>
                                <article className='w-4/5 flex flex-row items-center space-x-1 text-white'>
                                    <a className='text-xs font-medium'>2 min</a>
                                    <a className='text-xs font-medium'>-</a>
                                    <a className='text-xs font-medium'>27 Dec 2023</a>
                                </article>
                                <section className='w-4/5 text-sm text-white font-semibold capitalize'>
                                    Top 10 Must-Visit Destinations For 2023
                                </section>
                            </div>

                           </article>
                     </div>

                     <div className='w-[97%]  h-96  rounded-md grid place-content-center text-2xl text-black relative'>
                        <img src={imgtwo} className='w-full h-full' />

                        <article className='w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 '>
                            <div className='w-full mt-6 ml-4'>
                            <button className='w-20 h-6 text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white'>Finance</button>
                            </div>

                            <div className='w-full flex flex-col ml-4 absolute bottom-8'>
                                <article className='w-4/5 flex flex-row items-center space-x-1 text-white'>
                                    <a className='text-xs font-medium'>2 min</a>
                                    <a className='text-xs font-medium'>-</a>
                                    <a className='text-xs font-medium'>27 Dec 2023</a>
                                </article>
                                <section className='w-4/5 text-sm  text-white font-semibold capitalize'>
                                    Gold Price Surge Amid Uncertainty and Inflation Concern
                                </section>
                            </div>

                           </article>
                     </div>

                     <div className='w-[97%]  h-96 rounded-md grid place-content-center text-2xl text-black relative'>
                       <img src={imgtwo} className='w-full h-full' />

                       <article className='w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 '>
                            <div className='w-full mt-6 ml-4'>
                            <button className='w-20 h-6 text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white'>Technology</button>
                            </div>

                            <div className='w-full flex flex-col ml-4 absolute bottom-8'>
                                <article className='w-4/5 flex flex-row items-center space-x-1 text-white'>
                                    <a className='text-xs font-medium'>2 min</a>
                                    <a className='text-xs font-medium'>-</a>
                                    <a className='text-xs font-medium'>27 Dec 2023</a>
                                </article>
                                <section className='w-4/5 text-sm  text-white font-semibold capitalize'>
                                    Nigeria To Start Producing Eletric Vechices By 2024
                                </section>
                            </div>

                           </article>
                     </div>

                     <div className='w-[97%] h-96  rounded-md grid place-content-center text-2xl text-black relative'>
                     <img src={imgtwo} className='w-full h-full' />

                     <article className='w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 '>
                            <div className='w-full mt-6 ml-4'>
                            <button className='w-20 h-6 text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white'>Lifestyle</button>
                            </div>

                            <div className='w-full flex flex-col ml-4 absolute bottom-8'>
                                <article className='w-4/5 flex flex-row items-center space-x-1 text-white'>
                                    <a className='text-xs font-medium'>2 min</a>
                                    <a className='text-xs font-medium'>-</a>
                                    <a className='text-xs font-medium'>27 Dec 2023</a>
                                </article>
                                <section className='w-4/5 text-sm  text-white font-semibold capitalize'>
                                    Top 10 Must-Visit Destinations For 2023
                                </section>
                            </div>

                           </article>
                     </div>

                     <div className='w-[97%]  h-96  rounded-md grid place-content-center text-2xl text-black relative'>
                     <img src={imgtwo} className='w-full h-full' />
                     <article className='w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 '>
                            <div className='w-full mt-6 ml-4'>
                            <button className='w-20 h-6 text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white'>Finance</button>
                            </div>

                            <div className='w-full flex flex-col ml-4 absolute bottom-8'>
                                <article className='w-4/5 flex flex-row items-center space-x-1 text-white'>
                                    <a className='text-xs font-medium'>2 min</a>
                                    <a className='text-xs font-medium'>-</a>
                                    <a className='text-xs font-medium'>27 Dec 2023</a>
                                </article>
                                <section className='w-4/5 text-sm  text-white font-semibold capitalize'>
                                    Gold Price Surge Amid Uncertainty and Inflation Concern
                                </section>
                            </div>

                           </article>
                     </div>
                     </Carousel>
            </article>
        </div>
    )
}
