import React,{useState, useContext, useEffect} from 'react'
import './App.css';
import Header from './components/main/Header';
import Slider from './components/Home/Slider';
import Feature from './components/Home/Feature';
import Trending from './components/Home/Trending';
import Latest from './components/Home/Latest';
import Editors from './components/Home/Editors';
import Advert from './components/Home/Advert';
import Ash from './components/Home/Ash';
import Recent from './components/Home/Recent';
import Report from './components/Home/Report'
import Finance from './components/Home/Finance';
import Footer from './components/main/Footer';
import Category from './components/Home/Category';
import MobileNav from './components/Home/MobileNav';
import { useNavigate } from 'react-router-dom';
import { context } from './Context';
import Advert2 from './components/Home/Advert2';
import Subscrib from './components/Story/Subscrib';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Home() {
    const [sunmoon, setSunMoon] = useState(false)
    const [topstories, setTopstories] = useState([])
    const [featurestories, setFeaturestories] = useState([])
    const [tendall, setTendall] = useState([])
    const [editorall, seteditorall] = useState([])
    const [newstroriesall, setnewstroriesall] = useState([])
    const [financeall, setfinanceall] = useState([])
    const created = useContext(context);
    let {client} = created
    const navigate = useNavigate();
    
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
    

    const handleClick = (id)=>{
      navigate(`/story/${id}`);
    }
    
    let dataa = localStorage.getItem('btn')?JSON.parse(localStorage.getItem('btn')):false
    
     useEffect(()=>{

      if(Object.keys(dataa).length > 0){
       
       setSunMoon(sunmoon=>dataa.status)
      }


     },[dataa])

     console.log(sunmoon)
    useEffect(()=>{
        const steve = async ()=>{
           try {
           //     const pageSize = 2; // Number of entries per page
           //     let page = (2 - 1) * pageSize; // Initial skip value
           //  let data  = await  client.getEntries({
           //     //content_type this is used to select model in contentful 
           //         content_type:'daber',
           //         select:'fields',
           //         // limit and skip is used to paginate the data
           //         limit: pageSize,
           //         skip: page
           //     })  

              let top = await client.getEntries({content_type:"topstories",
              select:'fields'})
            //   topstories?.items
              setTopstories(top?.items)

              let features = await client.getEntries({content_type:"feature",
              select:'fields'})
              setFeaturestories(features?.items)

              let tending = await client.getEntries({content_type:'tending',  select:'fields'})
              setTendall(tending?.items)

              let editor = await client.getEntries({content_type:'recent',  select:'fields'})
              seteditorall(editor?.items)

              let newstories = await client.getEntries({content_type:'newstories',  select:'fields'})
              setnewstroriesall(newstories?.items)

              let finance = await client.getEntries({content_type:'finance',  select:'fields'})
              setfinanceall(finance?.items)


                   // Fetch the first page
                   // fetchPage(currentPage, pageSize);

                   // Later, if you want to move to the next page
                   // const nextPage = currentPage + 1;
                   // fetchPage(nextPage, pageSize);

                   // Similarly, if you want to move to the previous page
                   // const previousPage = currentPage - 1;
                   // fetchPage(previousPage, pageSize);
               
               // const totalPages = Math.ceil(data.total / pageSize);
               // console.log('Total Pages:', totalPages);

               // this is to get a single entire
               // sys: {id: 'mJSHIMmc9r78shBW5vPvt', type: 'Entry'}
               // let singledata = await client.getEntry('mJSHIMmc9r78shBW5vPvt')
               // console.log(data)
              
              // console.log(data)
           } catch (error) {
              console.log(error)  
           }
        }
        steve()



     },[])

    return (
        <div className={!sunmoon?'text-black bg-white':'text-white bg-black'}>
             <Header sunmoon={sunmoon} setSunMoon={setSunMoon}  handleSun={handleSun} />
             <Advert2 />
             <Slider topstories={topstories} client={client} sunmoon={sunmoon} handleClick={handleClick} Skeleton={Skeleton} SkeletonTheme={SkeletonTheme}/>
             {/* <Category/> */}
             <Feature client={client} featurestories={featurestories} handleClick={handleClick} Skeleton={Skeleton} SkeletonTheme={SkeletonTheme}/>
             <Trending sunmoon={sunmoon} tendall={tendall} client={client} handleClick={handleClick} Skeleton={Skeleton} SkeletonTheme={SkeletonTheme}/>
             <MobileNav/>
             <Advert/>
             <Editors editorall={editorall} client={client} handleClick={handleClick} Skeleton={Skeleton} SkeletonTheme={SkeletonTheme}/>
             <Advert/>
             <Recent newstroriesall={newstroriesall} client={client} handleClick={handleClick} Skeleton={Skeleton} SkeletonTheme={SkeletonTheme}/>
          <Subscrib/>
             <Finance financeall={financeall} client={client} handleClick={handleClick} Skeleton={Skeleton} SkeletonTheme={SkeletonTheme}/>
             <Footer/>
        </div>
    )
}
