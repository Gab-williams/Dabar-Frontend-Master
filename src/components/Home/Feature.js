import React from 'react'
import pixone from '../../images/02.png';
import boxing from '../../images/boxing.png';
import plant from '../../images/plant.png';
export default function Feature() {
    return (
        <div className='hidden sm:hidden md:w-full md:block lg:w-full lg:block'>
              <section className='w-10/12  m-auto mt-3 p-6 border-t border-b border-gray'>
                <article className='w-full flex flex-row  justify-evenly'>
                   <div className='w-1/4'>
                      <section className='w-full flex flex-row items-center space-x-1'>
                         <span className='w-1/4'>
                            <img src={pixone} className='w-[5rem] h-[4.2rem] rounded-full'/>
                         </span>
                         <div className='w-4/5 flex flex-col items-center'>
                            <span className='w-full px-1'>
                                <button className='w-20 h-6 text-xs float-left  font-medium capitalize bg-[#FD9005] text-white'>Culture</button>
                            </span>
                             <span className='w-full py-1 px-1 text-xs font-semibold capitalize text-left'>
                             AfroNation Lagos Event Cancellation shakes Lagos
                             </span>
                         </div>
                      </section>
                   </div>



                   <div className='w-1/4'>
                      <section className='w-full flex flex-row items-center space-x-1'>
                         <span className='w-1/4'>
                            <img src={boxing} className='w-[5rem] h-[4.2rem] rounded-full'/>
                         </span>
                         <div className='w-4/5 flex flex-col items-center'>
                            <span className='w-full px-1'>
                                <button className='w-20 h-6 text-xs float-left font-medium capitalize bg-[#FD9005] text-white'>Sports</button>
                            </span>
                             <span className='w-full py-1 px-1 text-xs font-semibold capitalize text-left'>
                             Rising Stars Of the Ring: Female Boxer Making Waves
                               in The Sport 
                             </span>
                         </div>
                      </section>
                   </div>


                   <div className='w-1/4'>
                      <section className='w-full flex flex-row items-center space-x-1'>
                         <span className='w-1/4'>
                            <img src={plant} className='w-[5rem] h-[4.2rem]  rounded-full'/>
                         </span>
                         <div className='w-4/5 flex flex-col items-center'>
                            <span className='w-full px-2'>
                                <button className='w-20 h-6 text-xs float-left font-medium capitalize bg-[#FD9005] text-white'>AR/VR</button>
                            </span>
                             <span className='w-full py-1 px-1 text-xs font-semibold capitalize text-left'>
                             Immersive Odyssey:Exploring The Cosmos in Virtual
                               Reality (VR) 
                             </span>
                         </div>
                      </section>
                   </div>

                </article>
              </section> 
        </div>
    )
}
