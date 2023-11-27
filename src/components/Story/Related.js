import React,{useEffect, useState} from 'react'
// import pic from '../../related img/afro.png'
// import picone from '../../related img/boxing.png'
// import picthree from '../../related img/plant.png'
import { useNavigate } from 'react-router-dom';

export default function Related(props) {
 const [Data, setData] = useState([])
 const {category, client}  = props
 const navigate = useNavigate();
  const recentstories = async()=>{
    let newstories = await client.getEntries({content_type:'currentstories',  select:'fields'})

 
      const newData = await Promise.all(
        newstories?.items.map(async (item) => {
          
           
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
            id:item.sys.id
           };
         })
       );
         let filterdata = newData.filter((item)=>item.category == category)
        
         setData(filterdata)
  }


  useEffect(()=>{
    const intervalId = setInterval(() => {
       recentstories();
     },5000)
   
     return () => {
       clearInterval(intervalId);
     };
     },[])

     const handleClick = (id)=>{
      navigate(`/story/${id}`);
    }

    return (
        <div className='w-full mt-10 flex flex-col item-center'>

            <section className='w-full text-lg  font-medium border-l-2 border-[#FD9005] px-2'>
                      Related Posts
            </section>


               <ul className='w-full flex flex-col items-center'>

                {
                  Data.map((item, index)=>{
                    return   <li className='w-full flex flex-row items-center mt-10' key={index} onClick={()=>handleClick(item.id)}>
                    <span className='w-1/3'>
                     <img src={item.thumbnail} className='w-24 h-full rounded-sm'/>
                    </span>
                    <span className='w-2/3 flex flex-col items-center'>
                      <div className='w-full'>
                      <button className='text-xs  float-left px-2 text-white py-2 bg-[#FD9005]'>{item.category}</button>
                      </div>
                      <div className='w-full text-xs sm:text-xs md:text-xs lg:text-sm capitalize font-semibold mt-2' onClick={()=>handleClick(item.id)}>
                      {item.summary.length > 70?item.summary.substr(0,70):item.summary}
                      </div>
                        
                    </span>
              </li>
                  })
                }

              


            


         

               </ul>
        </div>
    )
}
