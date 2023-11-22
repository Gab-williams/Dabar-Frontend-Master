import React from 'react'
import img from "../../ig_pic/woman_with_atm.png";
import imgone from "../../ig_pic/blackguy.png";
import imgtwo from "../../ig_pic/blackcar.png";
import imgthree from "../../ig_pic/yellowcar.png";
import imgfour from "../../ig_pic/phone.png";
import imgfive from "../../ig_pic/food.png";
import imgsix from "../../ig_pic/protest.png";
import imgeight from "../../ig_pic/Video.png";
import imgseven from "../../ig_pic/robot.png"
export default function Body() {

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
            image:imgsix
        },
        {
            image:imgseven
        },
        {
            image:imgeight
        },
       
        
    ]
    return (
        <div className='w-full'>

            <section className='w-10/12 text-lg sm:w-10/12 sm:text-base md:w-10/12 md:text-lg lg:w-1/3 lg:text-2xl m-auto capitalize font-semibold text-center  mt-6'>
                  the dabar instagram
            </section>

            <section className='w-11/12 m-auto'>
            <div className='w-full grid grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 place-content-center  gap-5 mt-5'>
                        {arr.map((item, index)=>{
                              return  <article key={index} className='w-40 sm:w-40 md:w-40 lg:w-72'>
                              <img src={item.image} className='w-full h-52 sm:h-52 md:h-52 lg:h-60' />
                            </article>
                        })}
                      
                    </div>
            </section>
            
        </div>
    )
}
