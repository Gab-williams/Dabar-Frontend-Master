import React,{useState, useEffect, useContext} from 'react'
// import picone from "../../images/cell-phone-pink-background-shows-analytics-graphics-generative-ai_563818-6612 1.png";
// import pictwo from "../../images/people.png";
// import picthree from "../../images/car.png";
// import picfour from "../../images/robot.png";
// import picfive from "../../images/medical.png";
// import picsix from "../../images/Group 237606.png";
// import picseven from "../../images/computer.png";
// import piceight from "../../images/phone.png";

// import picten from '../../images/medical.png';
// import piceleven from '../../images/Group 237606.png';
// import pictwelevn from '../../images/computer.png';
// import picthreeteen from '../../images/phone.png';
import ReactPaginate from 'react-paginate';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { context } from '../../Context';


export default function Body(props) {
  const navigate = useNavigate();
  const created = useContext(context);
  let {client} = created
  const {Skeleton, SkeletonTheme, data, setData} = props 
  // const location = useLocation();
  // console.log (location)
  let {slug} = useParams()
   let  categoryurl =  slug

  //  console.log("categoryurl", categoryurl)
  const [pageSize, setpageSize] = useState(12)
  const [currentPage, setcurrentPage] = useState(1);
  const [pagex, setpage] = useState(1)
  const [wholearr, setWholearr] = useState([])
  const recentstories = async()=>{
    let newstories = await client.getEntries({content_type:'currentstories',  select:'fields'})

 
      const newData = await Promise.all(
        newstories?.items.map(async (item) => {
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
            thumbnail:item.fields.storyId.fields.thumbnail.fields.file.url,
            category: answer,
            writer:answriter,
            id:item.sys.id,
            timez:formattedDate
           };
         })
       );
         let filterdata = newData.filter((item)=>item.category.toLowerCase() == categoryurl.toLowerCase())
         setWholearr(wholearr=>filterdata)
         console.log("filterdata", filterdata)
         let page = Math.ceil(filterdata.length / 12);
         const indexofLastPost =  currentPage * pageSize;
         const indexofFirstPost = indexofLastPost - pageSize;
         let ansdata = filterdata?.slice(indexofFirstPost, indexofLastPost);
         console.log(ansdata)
         setpage(pagex=>page)
         if(categoryurl){
          setData(data=>ansdata)
         }else{
          setData([]) 
         }

  }


  useEffect(()=>{
//  const intervalId = setInterval(() => {
    recentstories();
  // },5000)

  // return () => {
  //   clearInterval(intervalId);
  // };
  },[])

  // console.log(data)

   




  const handleClick = (id)=>{
    navigate(`/story/${id}`);
  }


  const handleNext =(ans)=>{
    let number = ans.selected + 1;  

    const indexofLastPost =  number * pageSize;
    const indexofFirstPost = indexofLastPost - pageSize;
    let ansdata = wholearr?.slice(indexofFirstPost, indexofLastPost);
    setData(data=>ansdata)
  }

    return (
        <div
        className= "w-full flex flex-col items-center " >
        <section className="w-10/12 mt-10">
         
        </section>
        <div className="w-11/12 mt-4 ">
          <article className=" w-full grid grid-cols-1 gap-4 place-content-center sm:w-full sm:grid sm:grid-cols-1 sm:gap-9  sm:place-content-between  md:w-full md:grid md:grid-cols-1 md:gap-3 md:space-x-4 md:place-content-center lg:w-full lg:grid lg:grid-cols-4 lg:gap-y-14 lg:space-x-2 lg:place-content-center">
            {data.length > 0? data.map((item, index) => {
              return (
                <section
                  className="m-auto min-h-full w-full sm:m-auto sm:w-full md:m-auto md:w-full lg:w-80"
                  key={index}
                  onClick={()=>handleClick(item.id)}>
                  <div className=" w-full flex flex-row space-x-4 items-center p-1 sm:w-full sm:space-x-1 sm:flex sm:flex-row sm:items-center sm:p-1 md:w-full md:space-x-1 md:flex md:flex-row md:items-center md:p-1 lg:w-full lg:flex lg:flex-col lg:items-center lg:p-1">
                    <section className="   w-56 relative sm:w-auto sm:relative md:w-60  md:relative  lg:w-full lg:relative">
                      <img
                        src={item.thumbnail}
                        className="w-full h-24 sm:h-auto md:h-32 lg:h-auto"
                      />
                      <article className="w-10/12 flex flex-col items-center  sm:w-full sm:flex sm:flex-col sm:items-center md:w-11/12 md:flex md:flex-col md:items-center  lg:w-full lg:flex lg:flex-col lg:items-center">
                        <div className="w-full mt-2 ml-3">
                          <button className="font-medium capitalize text-orange-500 text-xs hidden sm:block md:block lg:block">
                            {item.category}
                          </button>
                        </div>
                      </article>
                    </section>
  
                    <article className="w-11/12 flex flex-col items-center  sm:w-full sm:flex sm:flex-col sm:items-center md:w-11/12 md:flex md:flex-col md:items-center  lg:w-full lg:flex lg:flex-col lg:items-center">
                     
  
                      <section className="w-full leading-6 tracking-tight text-xs mt-1 sm:text-xs sm:mt-1 md:text-xs md:mt-1 lg:text-sm lg:mt-3  cursor-pointer font-semibold text-left capitalize" onClick={()=>handleClick(item.id)}>
                        {item.heading.length >= 70?item.heading.substr(0, 70):item.heading}
                      </section>
  
                      <article className="text-xs mt-1 hidden sm:block md:hidden lg:block lg:text-xs lg:mt-3 w-full text-left capitalize text-gray-500">
                        {item.summary.length >= 100?item.summary.substr(0, 90):item.summary}
                        <div className="w-full mt-4">
                        <span className="flex flex-row w-full sm:w-full md:w-full lg:w-10/12 float-left capitalize font-medium text-xs space-x-1 ">
                          <a>{item.writer}</a> <a>.</a> <a>{item.timez}</a>
                        </span>
                      </div>

                      </article>
                    </article>
                  </div>
                </section>
              );
            }):
            <SkeletonTheme  color="#5e6c77" highlightColor="#a9b7c1">
            <p>
            <Skeleton width={300} count={5} duration={2}  />
            </p>
           </SkeletonTheme>

            }
          </article>
        </div>

        <section className='w-10/12 flex justify-center items-center mt-4 py-4 '>
        <ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                    pageCount={pagex}
                    breakLabel={"..."}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    onPageChange={handleNext}
                    containerClassName={'flex flex-row items-center w-1/5 m-auto space-x-3'}
                    // pageclassNameName={' '}
                    pageLinkClassName={''}
                    previousClassName={'bg-gray-400 rounded-lg px-2 py-1 text-lg justify-center items-center text-white'}
                    nextClassName={'bg-gray-400 px-2 py-1 text-lg justify-center items-center text-white rounded-lg '}
                  />                </section>

              
      </div>
    )
}
