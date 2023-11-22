import React from 'react'
import picone from "../../images/cell-phone-pink-background-shows-analytics-graphics-generative-ai_563818-6612 1.png";
import pictwo from "../../images/people.png";
import picthree from "../../images/car.png";
import picfour from "../../images/robot.png";
import picfive from "../../images/medical.png";
import picsix from "../../images/Group 237606.png";
import picseven from "../../images/computer.png";
import piceight from "../../images/phone.png";

import picten from '../../images/medical.png';
import piceleven from '../../images/Group 237606.png';
import pictwelevn from '../../images/computer.png';
import picthreeteen from '../../images/phone.png';

export default function Body() {

    const arr = [
        {
          id: 1,
          catgories: "finance",
          author: "alec whitten",
          date: "1 jan 2023",
          pic: picone,
          heading: `payaza launches new crypto account and 
                card for use in Nigeria`,
          body: `Like to Know the secret of transforming a 
                2-14 into Super Bowl winning Dynasty`,
        },
        {
          id: 2,
          catgories: "news",
          author: "alec whitten",
          date: "1 jan 2023",
          pic: pictwo,
          heading: `Federal Reserve Announces Interest Rate Hike citing
                inflation concern`,
          body: `Like to Know the secret of transforming a 
                2-14 into Super Bowl winning Dynasty`,
        },
        {
          id: 3,
          catgories: "Automation",
          author: "alec whitten",
          date: "1 jan 2023",
          pic: picthree,
          heading: `Federal Reserve Announces Interest Rate Hike citing
                inflation concern`,
          body: `Like to Know the secret of transforming a 
                2-14 into Super Bowl winning Dynasty`,
        },
        {
          id: 4,
          catgories: "Lifestyle",
          author: "alec whitten",
          date: "1 jan 2023",
          pic: picfour,
          heading: `Federal Reserve Announces Interest Rate Hike citing
                inflation concern`,
          body: `Like to Know the secret of transforming a 
                2-14 into Super Bowl winning Dynasty`,
        },
        {
          id: 5,
          catgories: "Health & Fitness",
          author: "alec whitten",
          date: "1 jan 2023",
          pic: picfive,
          heading: `Federal Reserve Announces Interest Rate Hike citing
                inflation concern`,
          body: `Like to Know the secret of transforming a 
                2-14 into Super Bowl winning Dynasty`,
        },
        {
          id: 6,
          catgories: "LifeStyle",
          author: "alec whitten",
          date: "1 jan 2023",
          pic: picsix,
          heading: `Federal Reserve Announces Interest Rate Hike citing
                inflation concern`,
          body: `Like to Know the secret of transforming a 
                2-14 into Super Bowl winning Dynasty`,
        },
    
        {
          id: 7,
          catgories: "Technology",
          author: "alec whitten",
          date: "1 jan 2023",
          pic: picseven,
          heading: "Tech Giants Apple and Amazon Beat Q3 Earning Expectations",
          body: `Like to Know the secret of transforming a 
                2-14 into Super Bowl winning Dynasty`,
        },
        {
          id: 8,
          catgories: "Finance",
          author: "alec whitten",
          date: "1 jan 2023",
          pic: piceight,
          heading: "Tech Giants Apple and Amazon Beat Q3 Earning Expectations",
          body: `Like to Know the secret of transforming a 
                2-14 into Super Bowl winning Dynasty`,
        },

        {
            id:9,
            catgories:'Health & Fitness',
            author:'alec whitten',
            date:'1 jan 2023',
            pic:picten,
            heading:`Federal Reserve Announces Interest Rate Hike citing
            inflation concern`,
            body:`Like to Know the secret of transforming a 
            2-14 into Super Bowl winning Dynasty`,  
        },
        {
            id:10,
            catgories:'LifeStyle',
            author:'alec whitten',
            date:'1 jan 2023',
            pic:piceleven,
            heading:`Federal Reserve Announces Interest Rate Hike citing
            inflation concern`,
            body:`Like to Know the secret of transforming a 
            2-14 into Super Bowl winning Dynasty`,  
        },

        {
            id:11,
            catgories:'Technology',
            author:'alec whitten',
            date:'1 jan 2023',
            pic:pictwelevn,
            heading:'Tech Giants Apple and Amazon Beat Q3 Earning Expectations',
            body:`Like to Know the secret of transforming a 
            2-14 into Super Bowl winning Dynasty`, 
        },
        {
            id:12,
            catgories:'Finance',
            author:'alec whitten',
            date:'1 jan 2023',
            pic:picthreeteen,
            heading:'Tech Giants Apple and Amazon Beat Q3 Earning Expectations',
            body:`Like to Know the secret of transforming a 
            2-14 into Super Bowl winning Dynasty`, 
        }
      ];
    return (
        <div
        className= "w-full flex flex-col items-center " >
        <section className="w-10/12 mt-10">
          <div className="w-full flex flex-row items-center justify-between px-2 space-x-2">
            <button className="capitalize font-normal border-l-4 border-[#FD9005] text-sm px-2 hidden md:inline">
              Most Recent Stories
            </button>
  
        
          </div>
        </section>
        <div className="w-10/12 mt-4 ">
          <article className=" w-full grid grid-cols-1 gap-9 place-content-center sm:w-full sm:grid sm:grid-cols-1 sm:gap-9  sm:place-content-between  md:w-full md:grid md:grid-cols-1 md:gap-3 md:space-x-4 md:place-content-center lg:w-full lg:grid lg:grid-cols-4 lg:gap-y-14 lg:space-x-4 lg:place-content-center">
            {arr.map((item) => {
              return (
                <section
                  className="m-auto w-full sm:m-auto sm:w-full md:m-auto md:w-full lg:w-64"
                  key={item.id}
                >
                  <div className=" w-full flex flex-row space-x-4 items-center p-1 sm:w-full sm:space-x-1 sm:flex sm:flex-row sm:items-center sm:p-1 md:w-full md:space-x-1 md:flex md:flex-row md:items-center md:p-1 lg:w-full lg:flex lg:flex-col lg:items-center lg:p-1">
                    <section className="   w-56 relative sm:w-56 sm:relative md:w-60  md:relative  lg:w-full lg:relative">
                      <img
                        src={item.pic}
                        className="w-full h-24 sm:h-24 md:h-32 lg:h-40"
                      />
                      <article className="w-full absolute top-0 left-0 right-0 bottom-0 bg-cover bg-black bg-opacity-10">
                        <div className="w-full mt-4 ml-3">
                          <button className="px-2.5 py-1 font-medium capitalize text-white bg-[#FD9005] text-xs hidden sm:block md:block lg:block">
                            {item.catgories}
                          </button>
                        </div>
                      </article>
                    </section>
  
                    <article className="w-10/12 flex flex-col items-center  sm:w-full sm:flex sm:flex-col sm:items-center md:w-11/12 md:flex md:flex-col md:items-center  lg:w-full lg:flex lg:flex-col lg:items-center">
                      <div className="w-full mt-4">
                        <span className="flex flex-row w-full sm:w-full md:w-full lg:w-3/4 float-left capitalize font-medium text-xs space-x-1 ">
                          <a>alec whitten</a> <a>.</a> <a>1 jan 2023</a>
                        </span>
                      </div>
  
                      <section className="w-full text-xs mt-1 sm:text-xs sm:mt-1 md:text-xs md:mt-1 lg:text-xs lg:mt-3 font-semibold text-left capitalize  ">
                        {item.heading}
                      </section>
  
                      <article className="text-xs mt-1 hidden sm:block md:hidden lg:block lg:text-xs lg:mt-3 w-full text-left capitalize text-gray-500">
                        {item.body}
                      </article>
                    </article>
                  </div>
                </section>
              );
            })}
          </article>
        </div>

        <section className='w-10/12 flex justify-center items-center mt-4 py-4'>
                             <button className='w-28 px-2 py-2 capitalize text-sm text-center font-medium border border-black rounded-sm'>load more</button>
                </section>

              
      </div>
    )
}
