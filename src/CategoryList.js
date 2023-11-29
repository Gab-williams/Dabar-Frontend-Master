import React,{useEffect, useState, useContext} from 'react'
import Header from './components/main/Header'
import Top from './components/CategoryList/Top'
import Body from './components/CategoryList/Body'
import Footer from './components/main/Footer'
import MobileNav from './components/Home/MobileNav'
import Category from './components/Home/Category'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { context } from './Context';

export default function CategoryList() {

    const [sunmoon, setSunMoon] = useState(false)
    const [data, setData] = useState([])

    const created = useContext(context);
    let {client} = created
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

     const handleCate = async(categoryx)=>{
        console.log(categoryx)
        let newstories = await client.getEntries({content_type:'currentstories',  select:'fields'})
        const newData = await Promise.all(
          newstories?.items.map(async (item) => { 

            let timez = new Date(item.fields.storyId.sys.createdAt)
            const monthNames = [
              "Jan", "Feb", "Mar",
              "Apr", "May", "Jun", "Jul",
              "Aug", "Sept", "Oct",
              "Nov", "Dec"
            ];   
            const day = timez.getDate();
            const monthIndex = timez.getMonth();
            const year = timez.getFullYear();
            const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
            
            let data = await client.getEntry(item.fields.storyId.fields.categoryId.sys.id);
            let writer = await client.getEntry(item.fields.storyId.fields.writerId.sys.id)
            let answer = data.fields.category;
             let answriter = writer.fields.name
             return {
              heading: item.fields.storyId.fields.heading,
              summary: item.fields.storyId.fields.summary,
              thumbnail:item.fields.storyId.fields.thumbnail.fields.file.url,
              category: answer,
              writer:answriter,
              id:item.sys.id,
              timez:formattedDate
             };
           })
         );
  
     let datazx =  newData.filter((item)=>item.category == categoryx)
     setData(datazx)
     }

    return (
        <div className={!sunmoon?'w-full text-black bg-white':' w-full text-white bg-black'}>
            <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun}/>
            <Top/>
            <Category handleCate={handleCate}/>
            <MobileNav/>
            <Body Skeleton={Skeleton}  SkeletonTheme={SkeletonTheme} data={data} setData={setData}/>
           <Footer/> 
        </div>
    )
}
