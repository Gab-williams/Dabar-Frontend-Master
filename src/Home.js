import React,{useState} from 'react'
import './App.css';
import Header from './components/main/Header';
import Slider from './components/Home/Slider';
import Feature from './components/Home/Feature';
import Trending from './components/Home/Trending';
import Latest from './components/Home/Latest';
import Editors from './components/Home/Editors';
import Ash from './components/Home/Ash';
import Recent from './components/Home/Recent';
import Report from './components/Home/Report'
import Finance from './components/Home/Finance';
import Foooter from './components/main/Foooter';
import Category from './components/Home/Category';
import MobileNav from './components/Home/MobileNav';
export default function Home() {
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
        <div className={!sunmoon?'text-black':'text-white'}>
             <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun} />
             <Slider sunmoon={sunmoon}/>
             <Category/>
             <Feature/>
             <Trending sunmoon={sunmoon}/>
             <MobileNav/>
             <Latest/>
             <Editors/>
             <Ash/>
             <Recent/>
             <Report/>
             <Finance/>
             <Foooter/>
        </div>
    )
}
