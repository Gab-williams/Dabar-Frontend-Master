import React,{useContext, useEffect} from 'react'
import Header from './components/main/Header'
import Body from "./components/404/Body";
import Footer from './components/main/Foooter'
import Foooter from './components/main/Foooter';
import MobileNav from './components/Home/MobileNav';
import { context } from './Context';
export default function Error() {
    const created = useContext(context);
    let {client} = created



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
              console.log(top)
         
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
        <div>
            <Header/>
             <Body/>
             <MobileNav/>
             <Foooter/>
        </div>
    )
}
