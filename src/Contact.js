import React, {useState, useEffect} from 'react'
import Header from './components/main/Header'
import Hero from './components/Contact/Hero'
import Form from './components/Contact/Form'
import Subscribe from './components/Contact/Subscribe'
import Footer from "./components/main/Foooter"
import MobileNav from './components/Home/MobileNav'
export default function Contact() {

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
            <Hero/> 
            <Form/>
            <div className='w-full mt-24 flex flex-col items-center justify-center'>
                    <p className='text-center font-medium capitalize text-sm sm:text-sm md:text-base lg:text-lg'>Interested in working togeter?</p>
                    <p className='text-center font-medium capitalize mt-1  text-sm sm:text-sm md:text-base lg:text-lg'>Supendisse potenti Mauris mollis diam tempus ut.</p>
                    <p className='text-center font-medium capitalize mt-1  text-sm sm:text-sm md:text-base lg:text-lg'>email@example.com</p>
                    <p className='text-center font-medium capitalize mt-1  text-sm sm:text-sm md:text-base lg:text-lg'>New York, Ny</p>
            </div>
            <MobileNav/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}
