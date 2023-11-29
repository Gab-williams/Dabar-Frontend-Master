import React,{useEffect, useState} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
// import picone from "../../images/cell-phone-pink-background-shows-analytics-graphics-generative-ai_563818-6612 1.png";
// import pictwo from "../../images/people.png";
// import picthree from "../../images/car.png";
// import picfour from "../../images/robot.png";
// import picfive from "../../images/medical.png";
// import picsix from "../../images/Group 237606.png";
 import picseven from "../../images/computer.png";
// import piceight from "../../images/phone.png";
export default function Trending(props) {
  const { sunmoon, tendall, client, handleClick, Skeleton, SkeletonTheme } = props;


 
  const [alldata, setallData] = useState([])  
  //console.log(featurestories)
  useEffect(()=>{

     const fetchData = async () => {
        const newData = await Promise.all(
          tendall.map(async (item) => {
            // console.log("tending",item.fields)
             //console.log(item.fields.storyId.fields.writerId.sys.id)
             //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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
              category: answer,
              writer:answriter,
              thumbnail:item.fields.storyId.fields.thumbnail.fields.file.url,
              id:item.sys.id,
              timez:formattedDate

            };
          })
        );
  
        setallData(newData);
      };
  
      fetchData();

  },[tendall])
  // console.log(alldata)

  // const arr = [
  //   {
  //     id: 1,
  //     catgories: "finance",
  //     author: "alec whitten",
  //     date: "1 jan 2023",
  //     pic: picone,
  //     heading: `payaza launches new crypto account and 
  //           card for use in Nigeria`,
  //     body: `Like to Know the secret of transforming a 
  //           2-14 into Super Bowl winning Dynasty`,
  //   },
  //   {
  //     id: 2,
  //     catgories: "news",
  //     author: "alec whitten",
  //     date: "1 jan 2023",
  //     pic: pictwo,
  //     heading: `Federal Reserve Announces Interest Rate Hike citing
  //           inflation concern`,
  //     body: `Like to Know the secret of transforming a 
  //           2-14 into Super Bowl winning Dynasty`,
  //   },
  //   {
  //     id: 3,
  //     catgories: "Automation",
  //     author: "alec whitten",
  //     date: "1 jan 2023",
  //     pic: picthree,
  //     heading: `Federal Reserve Announces Interest Rate Hike citing
  //           inflation concern`,
  //     body: `Like to Know the secret of transforming a 
  //           2-14 into Super Bowl winning Dynasty`,
  //   },
  //   {
  //     id: 4,
  //     catgories: "Lifestyle",
  //     author: "alec whitten",
  //     date: "1 jan 2023",
  //     pic: picfour,
  //     heading: `Federal Reserve Announces Interest Rate Hike citing
  //           inflation concern`,
  //     body: `Like to Know the secret of transforming a 
  //           2-14 into Super Bowl winning Dynasty`,
  //   },
  //   {
  //     id: 5,
  //     catgories: "Health & Fitness",
  //     author: "alec whitten",
  //     date: "1 jan 2023",
  //     pic: picfive,
  //     heading: `Federal Reserve Announces Interest Rate Hike citing
  //           inflation concern`,
  //     body: `Like to Know the secret of transforming a 
  //           2-14 into Super Bowl winning Dynasty`,
  //   },
  //   {
  //     id: 6,
  //     catgories: "LifeStyle",
  //     author: "alec whitten",
  //     date: "1 jan 2023",
  //     pic: picsix,
  //     heading: `Federal Reserve Announces Interest Rate Hike citing
  //           inflation concern`,
  //     body: `Like to Know the secret of transforming a 
  //           2-14 into Super Bowl winning Dynasty`,
  //   },

  //   {
  //     id: 7,
  //     catgories: "Technology",
  //     author: "alec whitten",
  //     date: "1 jan 2023",
  //     pic: picseven,
  //     heading: "Tech Giants Apple and Amazon Beat Q3 Earning Expectations",
  //     body: `Like to Know the secret of transforming a 
  //           2-14 into Super Bowl winning Dynasty`,
  //   },
  //   {
  //     id: 8,
  //     catgories: "Finance",
  //     author: "alec whitten",
  //     date: "1 jan 2023",
  //     pic: piceight,
  //     heading: "Tech Giants Apple and Amazon Beat Q3 Earning Expectations",
  //     body: `Like to Know the secret of transforming a 
  //           2-14 into Super Bowl winning Dynasty`,
  //   },
  // ];
  return (
    <div
      className={
        sunmoon
          ? "w-full flex flex-col items-center text-white"
          : "w-full flex flex-col items-center"
      }
    >
      <section className="w-11/12 mt-10">
        <div className="w-full flex flex-row items-center justify-between px-2 space-x-2 ">
          <button className="capitalize font-normal text-xl text-sm px-2 hidden md:inline">
            Trending Topics
          </button>

          {/* <button className="hidden sm:hidden md:capitalize md:font-normal  md:bg-gray-300 md:flex md:flex-row md:items-center md:space-x-1 md:text-sm md:px-1 md:py-1 md:rounded-sm lg:capitalize lg:font-normal  lg:bg-gray-100 lg:flex lg:flex-row lg:items-center lg:text-black lg:space-x-1 lg:text-xs lg:pl-4 lg:px-2 lg:py-2 lg:rounded-md">
            <a>Show All</a>
            <a className="grid place-content-center">
              <MdKeyboardArrowRight className="text-base" />
            </a>
          </button> */}
        </div>
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
                      {item.summary.length >= 100?item.summary.substr(0, 90)+"...":item.summary}
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
  );
}
