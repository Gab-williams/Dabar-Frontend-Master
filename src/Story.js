import React,{useState, useEffect, useContext} from 'react'
import Header from './components/main/Header';
import Hero from "./components/Story/Hero"
import Storypart from './components/Story/Storypart';
import Footer from './components/main/Foooter'
import MobileNav from './components/Home/MobileNav';
import { Await, useParams } from 'react-router-dom';
import { context } from './Context';
import Advert2 from './components/Home/Advert2';
// import content from "../../images/content-single.jpg";
import pic from './images/content-single.jpg'
export default function Story() {
    const [sunmoon, setSunMoon] = useState(false)
    const [whole, setWhole] = useState([])
    const [writer, setWriter] = useState([])
    const [category, setCategory] = useState([])
    const [para, setpara] = useState([])
    const [solidfc, setSolidfc] = useState([])
    const created = useContext(context);
    const [preach, setPreach] = useState([])
    const [datexz, setDatexz] = useState([])
    const [mainImg, SetmainImg] = useState([])
    const [keypoints, setkeypoints] = useState([])
    const [preSummary, setPreSummary] = useState("")
    const [timex, settimex] = useState("")
   const {slug} = useParams();
   let {client, setidstory} = created

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

useEffect(()=>{
    const getslug = async()=>{
        if(slug){
            await setidstory(slug)   
           }
    }
    getslug();
},[])

let dataa = localStorage.getItem('btn')?JSON.parse(localStorage.getItem('btn')):false
 useEffect(()=>{
  if(Object.keys(dataa).length > 0){
   
   setSunMoon(sunmoon=>dataa.status)
  }
 },[dataa])



    const solidx = async()=>{
        let story = await client.getEntries({content_type:"stories",
        select:'fields'})
        //console.log(story?.items)
        setSolidfc(solidfc=>story?.items)
    }



        //setPreach(datadhj)
    //     let write = await client.getEntry(datadhj.fields.storyId.fields.writerId.sys.id)
    //     let cate = await client.getEntry(datadhj.fields.storyId.fields.categoryId.sys.id)
    //    // console.log(cate.fields.category)
    //    setCategory(cate.fields)
    //     setWriter(write.fields)

    //     setWhole(datadhj?.fields.storyId.fields)
    //     setpara(datadhj?.fields.storyId.fields.body.content)
  


    const fetechData = async()=>{
        try {
           
            const datadhj = await client.getEntry(slug);
          console.log(datadhj.fields.storyId.fields)
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            let timez = new Date(datadhj?.sys.createdAt).toLocaleDateString("en-US", options);
            //console.log(timez)
            settimex(timex=>timez)
            setDatexz(datexz=>timez)
      let write = await client.getEntry(datadhj.fields.storyId.fields.writerId.sys.id)
         console.log(write)
        let cate = await client.getEntry(datadhj.fields.storyId.fields.categoryId.sys.id)
       let pre = datadhj?.fields.storyId.fields.preSummary
       console.log(datadhj?.fields.storyId.fields.keypoints)
       if(datadhj?.fields.storyId.fields.keypoints.content != undefined){
        setkeypoints(keypoints=>datadhj?.fields.storyId.fields.keypoints.content)
       }else{
        setkeypoints([]);
       }
    // console.log(datadhj?.fields.storyId)
    if(datadhj?.fields.storyId.fields.mainImage || datadhj?.fields.storyId.fields.mainImage != undefined){
        SetmainImg(mainImg=>datadhj?.fields.storyId.fields.mainImage.fields.file.url)
    }else{
        SetmainImg(mainImg=>pic)  
    }
       setPreSummary(preSummary=>pre)
            setPreach(preach  =>datadhj);
        setCategory(category=>cate.fields)
        setWriter(writer=>write.fields)
        setWhole(whole=>datadhj?.fields.storyId.fields)
        setpara(para=>datadhj?.fields.storyId.fields.body.content)
          } catch (error) {
            console.log('Error fetching data from Contentful:', error);
            // Handle error if needed, e.g., setError(true)
          }
    }

   

     useEffect(()=>{
        const intervalId = setInterval(() => {
            fetechData();
            solidx();
        },2000)

        return () => {
            clearInterval(intervalId);
          };

     },[])
   
  
    return (
        <div className={!sunmoon?'w-full text-black bg-white':' w-full text-white bg-black'}>
            <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun}  />
            <Advert2 />
            <Hero whole={whole} writer={writer} category={category} datexz={datexz} mainImg={mainImg} preSummary={preSummary} timex={timex}/>
            <MobileNav/>
            <Storypart writer={writer} para={para} client={client} category={category} solidfc={solidfc} keypoints={keypoints}/>
            <Footer/>
        </div>
    )
}
