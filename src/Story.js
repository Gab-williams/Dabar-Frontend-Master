import React,{useState} from 'react'
import Header from './components/main/Header';
import Hero from "./components/Story/Hero"
import Storypart from './components/Story/Storypart';
import Footer from './components/main/Foooter'
import MobileNav from './components/Home/MobileNav';
export default function Story() {
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
        <div className={!sunmoon?'text-black':'text-white'}>
            <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun}  />
            <Hero/>
            <MobileNav/>
            <Storypart/>
            <Footer/>
        </div>
    )
}
