import React from 'react'
import img from "../../thumbnail/black guy.png";
import imgone from "../../thumbnail/food.png";
import imgtwo from "../../thumbnail/black woman close to an atm.png"
import imgthree from "../../thumbnail/black guy wearing green.png"
import imgfour from "../../thumbnail/white girl wearing green.png";
import imgfive from "../../thumbnail/robot cooking.png"
import imgeight from "../../thumbnail/plant.png";
import imgseven from "../../thumbnail/protest.png"
import imgsix from '../../thumbnail/black guy plainting.png'
export default function Videos() {

    const arr = [
        {
            image:img,
        },
        {
            image:imgone,
        },
        {
            image:imgtwo,
        },
        {
            image:imgthree,
        },
        {
            image:imgfour
        },
        {
            image:imgfive
        },
        {
            image:imgeight
        },
        {
            image:imgseven
        },
        {
            image:imgsix
        },
    ]
    return (
        <div className='w-full flex flex-col items-center'>

             <section className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12  '>
                <article className='w-full  mt-3'>
                    <span className='w-2/3 sma:w-1/3 md:w-1/3 lg:w-1/6  float-left'>
                      <button className='capitalize font-normal border-l-4 border-[#FD9005] text-sm px-1 '>Most recent videos</button>
                    </span>
                </article>
                </section>

                <section className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12  '>
                    <div className='w-full grid grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 place-content-center space-x-4 gap-5 mt-5'>
                        {arr.map((item, index)=>{
                              return  <article key={index} className='w-40 sm:w-40 md:w-40 lg:w-72'>
                              <img src={item.image} className='w-full h-52 sm:h-52 md:h-52 lg:h-52' />
                            </article>
                        })}
                      
                    </div>
                </section>


                <section className='w-10/12 flex justify-center items-center mt-4 py-4'>
                             <button className='w-28 px-2 py-2 capitalize text-sm text-center font-medium border border-black rounded-sm'>load more</button>
                </section>
            
        </div>
    )
}
