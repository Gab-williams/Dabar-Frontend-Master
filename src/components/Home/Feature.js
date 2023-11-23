import React,{useRef, useEffect, useState} from 'react';
import pixone from '../../images/02.png';
import boxing from '../../images/boxing.png';
import plant from '../../images/plant.png';
export default function Feature(props) {
   const {client, featurestories} = props
   const [alldata, setallData] = useState([])  
   //console.log(featurestories)
   useEffect(()=>{

      const fetchData = async () => {
         const newData = await Promise.all(
            featurestories.map(async (item) => {
              // console.log(item.fields.storyId.fields.categoryId.sys.id)
             let data = await client.getEntry(item.fields.storyId.fields.categoryId.sys.id);
            //  console.log(data)
             let answer = data.fields.category;
   
             return {
               heading: item.fields.storyId.fields.heading,
               summary: item.fields.storyId.fields.summary,
               category: answer,
             };
           })
         );
   
         setallData(newData);
       };
   
       fetchData();

   },[featurestories])
    
   console.log(alldata)
    return (
        <div className='hidden sm:hidden md:w-full md:block lg:w-full lg:block'>
              <section className='w-10/12  m-auto mt-3 p-6 border-t border-b border-gray'>
                <article className='w-full flex flex-row  justify-evenly'>
                   {alldata.map((item)=>{
                     return  <div className='w-1/4'>
                     <section className='w-full flex flex-row items-center space-x-1'>
                        <span className='w-1/4'>
                           <img src={pixone} className='w-[5rem] h-[4.2rem] rounded-full'/>
                        </span>
                        <div className='w-4/5 flex flex-col items-center'>
                           <span className='w-full px-1'>
                               <button className=' h-6 text-xs float-left  font-medium capitalize bg-[#FD9005] text-white'>{item.category}</button>
                           </span>
                            <span className='w-full py-1 px-1 text-xs font-semibold capitalize text-left'>
                              {item.heading}
                            </span>
                        </div>
                     </section>
                  </div>
                   })}
                 



                </article>
              </section> 
        </div>
    )
}
