import React,{useEffect, useState} from 'react'
import Header from './components/main/Header'
import Body from './components/Ig_Grid/Body'
import MobileNav from './components/Home/MobileNav'
import Footer from './components/main/Foooter'

export default function Ig_Grid() {
    const [sunmoon, setSunMoon] = useState(false)

    // const handleMoon =(e)=>{
    //     e.preventDefault();
    //  setSunMoon(true)  
    //  document.body.style='background:black;'; 
    // }
    
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
        <div className='w-full'>
            <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun}/>
            <MobileNav/>
             <Body/>
             <Footer/>
        </div>
    )
}
