import React,{useState, useContext, useEffect} from 'react'
import pic from '../../related img/afro.png'
import picone from '../../related img/boxing.png'
import picthree from '../../related img/plant.png'
import { context } from '../../Context';
import { useNavigate } from 'react-router-dom';
export default function Related(props) {
  const {category, solidfc} = props
  // console.log(solidfc)
  const navigate = useNavigate();

  const created = useContext(context);
  let {client} = created

  const [relatedss, setRelatedss] = useState([])
  useEffect(()=>{
    const related  = async ()=>{
     
      //let add = story?.items
 
 
 
       const newData = await Promise.all(
         solidfc.map(async (item) => {
            //  console.log(item.fields)
            let data = await client.getEntry(item.fields.categoryId.sys.id);
            let writer = await client.getEntry(item.fields.writerId.sys.id)
          
            let answer = data.fields.category;
             let answriter = writer.fields.name
            return {
              heading: item.fields.heading,
              summary: item.fields.summary,
              thumbnail:item.fields.thumbnail.fields.file.url,
              category: answer,
              writer:answriter,
              id:item.sys.id
            };
          })
        );
 
        //console.log(newData)
       let filtereddata = newData.filter((item)=>item.category == category)
       setRelatedss(filtereddata)
     }
 
     related()


  },[solidfc])


  // const handleClick = (id)=>{
  //   navigate(`/story/${id}`);
  // }

    return (
        <div className='w-full mt-6 flex flex-col item-center'>

            <section className='w-full text-lg  font-medium border-l-2 border-[#FD9005] px-2'>
                      Related Posts
            </section>


               <ul className='w-full flex flex-col items-center'>
                {relatedss.length > 0? 
                relatedss.map((item)=>{
                  return  <li className='w-full flex flex-row items-center mt-3' >
                  <span className='w-1/3'>
                   <img src={item.thumbnail} className='w-24 h-full rounded-sm'/>
                  </span>
                  <span className='w-2/3 flex flex-col items-center'>
                    <div className='w-full'>
                    <button className='text-xs  float-left px-2 text-white py-2 bg-[#FD9005]'>{item.category}</button>
                    </div>
                    <div className='w-full text-xs sm:text-xs md:text-xs lg:text-sm capitalize font-semibold mt-2' >
                     {item.heading}
                    </div>
                      
                  </span>
            </li>
                })
                :[]}

               


              



               </ul>
        </div>
    )
}
