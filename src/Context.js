import React,{createContext, useState, useEffect} from 'react'
import {createClient} from 'contentful'
const context = createContext();
export default function Provider({children}) {

  const [idstory, setidstory] = useState("")
const [storydata, setstorydata] = useState([])
    const client =  createClient({
        space:'t0pszie0jiqu',
        accessToken:'bm2qgxL1ruXxTPkEQT0KgtAuHOwVxlOzOuj-AoNo-AM',
      });


      const categoryMenu = [
        {
          title: "Business Insights",
          subcategories: [
            "Industry Insights",
            "Entrepreneurship",
            "Leadership & Management",
            "Global Economy",
            "Corporate Responsibility",
          ],
        },
        {
          title: "Technology Trends",
          subcategories: [
            "Technology & Innovation",
            "Blockchain & Cryptocurrency",
            "Artificial Intelligence & Machine Learning",
          ],
        },
        {
          title: "Marketing & Finance",
          subcategories: ["Marketing & Advertising", "Finance & Investment"],
        },
        {
          title: "Workplace & Culture",
          subcategories: [
            "Human Resources",
            "Diversity & Inclusion",
            "Career Development",
          ],
        },
        {
          title: "Productivity & Innovation",
          subcategories: ["Productivity & Tools", "Innovation Implementation"],
        },
        {
          title: "Multimedia & Events",
          subcategories: ["Events & Conferences", "Multimedia Content"],
        },
        {
          title: "Opinions & Editorials",
          subcategories: ["Opinion & Editorial"],
        },
      ];
      console.log(idstory)

     const fetchdata = async()=>{
        // let data = await client.getEntry(`${idstory}`);
        // console.log("contextapi ",data)
     }

     useEffect(()=>{
      const intervalId = setInterval(() => {
        fetchdata();
    },2000)
    return () => {
        clearInterval(intervalId);
      };

     },[])

    return (
      <context.Provider value={{ 
        client:client,
        categoryMenu:categoryMenu,
        setidstory:setidstory,
        // idstory:idstory
       }}>
       {children}
      </context.Provider>
    )
}

export {Provider, context}