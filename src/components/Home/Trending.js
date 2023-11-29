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
      
      <div className="w-11/12 mt-4">
        <article className="w-full grid gap-4 place-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {alldata.length > 0 ? (
            alldata.map((item) => (
              <section
                key={item.id}
                className="m-auto min-h-full w-full sm:w-full lg:w-80"
                onClick={() => handleClick(item.id)}
              >
                <div className="w-full flex flex-col space-y-2 p-1">
                  <img
                    src={item.thumbnail}
                    className="w-full h-50 sm:h-auto lg:h-auto"
                    alt={item.heading}
                  />

                  <div className="w-full">
                    <button className="font-medium capitalize text-orange-500 text-xs sm:hidden lg:block">
                      {item.category}
                    </button>
                  </div>

                  <div className="w-full">
                    <section
                      className="w-full leading-6 tracking-tight text-base sm:text-xs lg:text-lg hover:underline hover:text-black-500 transition-colors cursor-pointer font-semibold text-left capitalize"
                      onClick={() => handleClick(item.id)}
                    >
                      {item.heading}
                    </section>
                  </div>

                  <div className="text-xs sm:hidden lg:block lg:text-sm">
                    {item.summary.length >= 100
                      ? item.summary.substr(0, 90) + "..."
                      : item.summary}
                  </div>

                  <div className="w-full mt-4">
                    <span className="flex flex-row w-full text-xs space-x-1">
                      <a>
                        {item.writer.length >= 15
                          ? item.writer.substr(0, 20) + "..."
                          : item.writer}
                      </a>{" "}
                      <a>.</a> <a>{item.timez}</a>
                    </span>
                  </div>
                </div>
              </section>
            ))
          ) : (
            <SkeletonTheme color="#5e6c77" highlightColor="#a9b7c1">
              <p className="w-full">
                <Skeleton width={300} count={5} duration={2} />
              </p>
            </SkeletonTheme>
          )}
        </article>
      </div>
    </div>
  );
}