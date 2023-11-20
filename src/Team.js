import React,{useEffect, useState} from 'react'
import Header from './components/main/Header';
import Grid from './components/Team/Grid';
import Subscribe from './components/Contact/Subscribe';
import Foooter from './components/main/Foooter';
import MobileNav from './components/Home/MobileNav';
export default function Team() {

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
        <div>
            <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun}/>

            <h2 className='text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-black mt-5  uppercase text-center'>The dabar team</h2>

            <Grid/>
            <MobileNav/>
            <Subscribe/>
            <Foooter/>
        </div>
    )
}
