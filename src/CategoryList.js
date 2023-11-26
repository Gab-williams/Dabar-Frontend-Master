import React,{useEffect, useState} from 'react'
import Header from './components/main/Header'
import Top from './components/CategoryList/Top'
import Body from './components/CategoryList/Body'
import Footer from './components/main/Foooter'
import MobileNav from './components/Home/MobileNav'
import Category from './components/Home/Category'

export default function CategoryList() {

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
        <div className={!sunmoon?'w-full text-black':' w-full text-white'}>
            <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun}/>
            <Top/>
            <Category/>
            <MobileNav/>
            <Body/>
           <Footer/> 
        </div>
    )
}
