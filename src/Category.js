import React,{useState} from 'react'
import Header from './components/main/Header'
import Top from './components/Videos/Top'
import Videos from './components/Videos/Videos'
import Foooter from './components/main/Foooter'
import MobileNav from './components/Home/MobileNav'
export default function Category() {
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
        <div className='w-full'>
          <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun}/>
          <Top/>
          <MobileNav/>
          <Videos/>
            <Foooter/>
        </div>
    )
}
