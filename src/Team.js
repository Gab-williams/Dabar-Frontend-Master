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
     let object = {status:true}
     localStorage.setItem("btn", JSON.stringify(object))
     document.body.style='background:black;'; 
        }else{
        e.preventDefault()
        setSunMoon(false)
        let object = {status:false}
        localStorage.setItem("btn", JSON.stringify(object))
        document.body.style = 'background:white;';
        }
    }
    
    let dataa = localStorage.getItem('btn')?JSON.parse(localStorage.getItem('btn')):false
     useEffect(()=>{
      if(Object.keys(dataa).length > 0){
       
       setSunMoon(sunmoon=>dataa.status)
      }
     },[dataa])
    return (
        <div className={!sunmoon?'w-full text-black bg-white':' w-full text-white bg-black'}>
            <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun}/>

            <h2 className={!sunmoon?'text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-black mt-5  uppercase text-center':'text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-white mt-5  uppercase text-center'} >The dabar team</h2>

            <Grid/>
            <MobileNav/>
            <Subscribe/>
            <Foooter/>
        </div>
    )
}
