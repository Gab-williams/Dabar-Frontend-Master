import React,{useEffect, useState} from 'react'
import Header from './components/main/Header'
import Top from './components/CategoryList/Top'
import Body from './components/CategoryList/Body'
import Footer from './components/main/Footer'
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
            <Top/>
            <Category/>
            <MobileNav/>
            <Body/>
           <Footer/> 
        </div>
    )
}
