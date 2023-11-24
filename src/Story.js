import React,{useState, useEffect, useContext} from 'react'
import Header from './components/main/Header';
import Hero from "./components/Story/Hero"
import Storypart from './components/Story/Storypart';
import Footer from './components/main/Foooter'
import MobileNav from './components/Home/MobileNav';
import { useParams } from 'react-router-dom';
import { context } from './Context';

export default function Story() {
    const [sunmoon, setSunMoon] = useState(false)
    const [whole, setWhole] = useState([])
    const [writer, setWriter] = useState([])
    const [category, setCategory] = useState([])
    const [para, setpara] = useState([])
    const [solidfc, setSolidfc] = useState([])
    const created = useContext(context);
    const [preach, setPreach] = useState([])
   const {slug} = useParams();
   let {client} = created
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
            console.log(datadhj)
      let write = await client.getEntry(datadhj.fields.storyId.fields.writerId.sys.id)
      console.log(write)
        let cate = await client.getEntry(datadhj.fields.storyId.fields.categoryId.sys.id)
            setPreach(preach  =>datadhj);
        setCategory(category=>cate.fields)
        setWriter(writer=>write.fields)
        setWhole(whole=>datadhj?.fields.storyId.fields)
        setpara(para=>datadhj?.fields.storyId.fields.body.content)
          } catch (error) {
            console.error('Error fetching data from Contentful:', error);
            // Handle error if needed, e.g., setError(true)
          }
    }

   

     useEffect(()=>{
        const intervalId = setInterval(() => {
            fetechData();
            solidx();
        },5000)

        return () => {
            clearInterval(intervalId);
          };

     },[])
   
  
    return (
        <div className={!sunmoon?'text-black':'text-white'}>
            <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun}  />
            <Hero whole={whole} writer={writer} category={category}/>
            <MobileNav/>
            <Storypart writer={writer} para={para} category={category} solidfc={solidfc}/>
            <Footer/>
        </div>
    )
}
