import React,{useEffect, useState} from "react";
// import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
// import picfive from '../../images/medical.png';
// import picsix from '../../images/Group 237606.png';
// import picseven from '../../images/computer.png';
// import piceight from '../../images/phone.png';

export default function Recent(props) {
  const { newstroriesall, client, handleClick, Skeleton, SkeletonTheme } = props;
    
   
    const [alldata, setallData] = useState([])  

    useEffect(()=>{

      const fetchData = async () => {
         const newData = await Promise.all(
          newstroriesall.map(async (item) => {
            const monthNames = [
              "Jan", "Feb", "Mar",
              "Apr", "May", "Jun", "Jul",
              "Aug", "Sept", "Oct",
              "Nov", "Dec"
            ];
            let timez = new Date(item.fields.storyId.sys.createdAt)
            // console.log(timez)
                  
            const day = timez.getDate();
            const monthIndex = timez.getMonth();
            const year = timez.getFullYear();
            const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

              //console.log(item.fields.storyId.fields.writerId.sys.id)
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
               timez:formattedDate,
             };
           })
         );
   
         setallData(newData);
       };
   
       fetchData();
 
   },[newstroriesall])
 
  //  console.log(newstroriesall)

    return (
        <div className='w-full flex flex-col items-center'>
                 <section className='w-11/12 mt-5'>
                <article className='w-full flex flex-row items-center justify-between mt-5 px-2 space-x-2'>
                    <span className='w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/6 '>
                      <button className='capitalize font-normal text-xl text-sm px-2 hidden md:inline '>Recent Topics</button>
                    </span>

                     {/* <button className='hidden sm:hidden md:capitalize md:font-normal  md:bg-gray-300 md:flex md:flex-row md:items-center md:space-x-1 md:text-sm md:px-1 md:py-1 md:rounded-sm lg:capitalize lg:font-normal  lg:bg-gray-100 lg:flex lg:flex-row lg:items-center lg:text-black lg:space-x-1 lg:text-xs lg:pl-4 lg:px-2 lg:py-2 lg:rounded-md' ><a className='capitalize text-xs'>Show All</a> <a><MdOutlineKeyboardArrowRight/></a></button> */}
                </article>
                </section>

                <div className="w-11/12 mt-4 ">
        <article className=" w-full grid grid-cols-1 gap-4 place-content-center sm:w-full sm:grid sm:grid-cols-1 sm:gap-9  sm:place-content-between  md:w-full md:grid md:grid-cols-1 md:gap-3 md:space-x-4 md:place-content-center lg:w-full lg:grid lg:grid-cols-4 lg:gap-y-14 lg:space-x-2 lg:place-content-center">
          {alldata.length > 0? alldata.map((item) => {
            return (
              <section
                className="m-auto min-h-full w-full sm:m-auto sm:w-full md:m-auto md:w-full lg:w-80" onClick={()=>handleClick(item.id)} key={item.id}>
                <div className=" w-11/12 flex flex-row space-x-4 items-center p-1 sm:w-full sm:space-x-1 sm:flex sm:flex-row sm:items-center sm:p-1 md:w-full md:space-x-1 md:flex md:flex-row md:items-center md:p-1 lg:w-full lg:flex lg:flex-col lg:items-center lg:p-1">
                  <section className="   w-46 relative sm:w-auto sm:relative md:w-60  md:relative  lg:w-full lg:relative">
                    <img
                      src={item.thumbnail}
                      className="w-full h-24 sm:h-auto md:h-32 lg:h-auto"
                    />
                  </section>

                  <article className="w-10/12 flex flex-col items-center  sm:w-full sm:flex sm:flex-col sm:items-center md:w-11/12 md:flex md:flex-col md:items-center  lg:w-full lg:flex lg:flex-col lg:items-center">
                  <div className="w-full mt-2">
                        <button className="font-medium capitalize text-orange-500 text-xs hidden sm:block md:block lg:block">
                          {item.category}
                        </button>
                      </div>
                   

                    <section className="w-full leading-6 tracking-tight text-base mt-1 sm:text-xs sm:mt-1 md:text-xs md:mt-1 lg:text-lg lg:mt-3 hover:underline hover:text-black-500 transition-colors cursor-pointer font-semibold text-left capitalize" onClick={()=>handleClick(item.id)}>
                      {item.heading}
                    </section>

                    <article className="text-xs mt-1 hidden sm:block md:hidden lg:block lg:text-sm lg:mt-3 w-full text-left capitalize text-gray-500">
                      {item.summary.length >= 100?item.summary.substr(0, 80)+"...":item.summary}
                    </article> 
                    <div className="w-full mt-4">
                    <span className='flex flex-row w-full sm:w-full md:w-full lg:w-3/4 float-left capitalize font-medium text-xs space-x-1'><a>{item.writer.length >= 15?item.writer.substr(0, 20)+"...":item.writer }</a> <a>.</a> <a>{item.timez}</a></span>

                    </div>
                  </article>
                </div>
              </section>
            );
          }):
          <SkeletonTheme  color="#5e6c77" highlightColor="#a9b7c1">
          <p>
          <Skeleton width={1000} count={5} duration={2}  />
          </p>
         </SkeletonTheme>
          }

          
        </article>
      </div>

        </div>
    )
}
