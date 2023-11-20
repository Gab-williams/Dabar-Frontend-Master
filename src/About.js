import React, {useState} from 'react';
import Header from "./components/main/Header";
import image from "./images/pink video.png";
import Foooter from './components/main/Foooter';
import Subscribe from './components/Contact/Subscribe';
export default function About() {
    const [sunmoon, setSunMoon] = useState(false)

    const handleSun =(e)=>{
        if(!sunmoon){
      e.preventDefault();
     setSunMoon(true)  
     document.body.style='background:black;'; 
        }else{
        e.preventDefault()
        setSunMoon(false)
        document.body.style = 'background:white;';
        }
    }
    return (
        <div className='lg:w-full lg:flex lg:flex-col lg:items-center'>
            <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun} />
            <h2 className='uppercase text-center text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-black mt-14'>About Dabar</h2>
            <section className='w-11/12 m-auto sm:w-11/12 sm:m-auto md:w-3/4 md:m-auto lg:w-2/5 font-semibold text-sm text-left mt-6'>
            Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. 
            Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional.
             Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. 
             Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail.
             Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.
            </section>
            
              <section className='  lg:w-2/5 rounded-md  h-64 mt-10'>
                  <img src={image} className='w-full h-full' />
              </section>


              <section className='w-11/12 m-auto sm:w-11/12 sm:m-auto md:w-3/4 md:m-auto lg:w-2/5 font-semibold text-sm text-left mt-6'>
          
           Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. 
           Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. 
           Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. 
           Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. 
           Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.
            </section>
            <Subscribe/>
            <Foooter/>
        </div>
    )
}