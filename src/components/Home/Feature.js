import React,{useRef, useEffect, useState} from 'react';
export default function Feature(props) {
   const {client, featurestories, handleClick, Skeleton, SkeletonTheme} = props
   const [alldata, setallData] = useState([])  
   //console.log(featurestories)
   useEffect(()=>{

      const fetchData = async () => {
         const newData = await Promise.all(
            featurestories.map(async (item) => {
               // console.log(item.fields.storyId.fields.thumbnail.fields.file.url)
              // console.log(item.fields.storyId.fields.categoryId.sys.id)
             let data = await client.getEntry(item.fields.storyId.fields.categoryId.sys.id);
            //  console.log(data)
             let answer = data.fields.category;
   
             return {
               heading: item.fields.storyId.fields.heading,
               summary: item.fields.storyId.fields.summary,
               category: answer,
               thumbnail:item.fields.storyId.fields.thumbnail.fields.file.url,
               id:item.sys.id
             };
           })
         );
   
         setallData(newData);
       };
   
       fetchData();

   },[featurestories])
    
    return (
        <div className='hidden sm:hidden md:w-full md:block lg:w-full lg:block'>
              <section className='w-full min-h-full m-auto mt-3 p-6 border-t border-b border-gray'>
                <article className='w-full flex flex-row  justify-evenly'>
                   {alldata.length > 0? alldata.map((item)=>{
                     return  <div className='w-1/4' onClick={()=>handleClick(item.id)}>
                     <section className='w-full  flex flex-row items-center space-x-1'>
                        <span className='w-auto'>
                           <img src={item.thumbnail} className='w-[6rem] h-[4.7rem] object-cover rounded-full'/>
                        </span>
                        <div className='w-full flex flex-col items-center'>
                           
                            <span className='w-full py-1 px-1 text-sm font-semibold capitalize text-left  cursor-pointer hover:underline hover:text-black transition-colors' onClick={()=>handleClick(item.id)}>
                              {item.heading}
                            </span>
                            <span className='w-full px-1'>
                               <a className=' h-6 text-xs float-left  font-medium capitalize text-orange-500'>{item.category}</a>
                           </span>
                        </div>
                     </section>
                  </div>
                   }):
                   <SkeletonTheme  color="#5e6c77" highlightColor="#a9b7c1">
                   <p>
                   <Skeleton width={1000} count={5} duration={2}  />
                   </p>
                  </SkeletonTheme>
                   
                   }
                 



                </article>
              </section> 
        </div>
    )
}
