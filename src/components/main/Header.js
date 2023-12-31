import React,{useState} from 'react'
import logo from '../../images/real logo.png';
import logotwo from '../../images/Transparent PNG-011.png';
import '../../App.css';
import {MdKeyboardArrowDown, MdOutlineWbSunny, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {BsThreeDotsVertical, BsSearch, BsMoon} from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBookmark } from "react-icons/fa";
import {Link} from 'react-router-dom'
import userpic from '../../images/userprofile.png'
export default function Header(props) {
    const {sunmoon, handleSun, handleMoon} = props
    const [ispages, setisPage] = useState(false) 
    const handleisPage = ()=>{
      if(!ispages){
        setisPage(true)
      }else{
        setisPage(false)
      }
    }
// useEffect(()=>{
// if(sunmoon){
//     document.body.classList.add('background-black');
// }else{
//     document.body.classList.add('background-white');
// }
// },[]);




    return (
        <div className=" md:w-full md:flex md:flex-col md:items-center md:justify-center md:p-2 md:headerall lg:w-full lg:flex lg:items-center lg:justify-center lg:p-2 headerall">
            {/* large screen  */}
              <article className={!sunmoon?'hidden sm:hidden md:hidden lg:w-10/12  lg:flex lg:flex-row lg:items-center lg:justify-between  lg:border-b lg:border-gray lg:p-6':'hidden sm:hidden md:hidden lg:w-10/12  lg:flex lg:flex-row lg:items-center lg:justify-between  lg:border-b lg:border-white lg:p-6'} >
                {/* logo and links */}
                 <section className='w-1/2'>
                   <div className='w-full flex flex-row items-center justify-between'>
                       <span className='w-1/5  '>
                         <img src={!sunmoon?logo:logotwo} className='w-full h-full' />
                       </span>

                       <span className='w-3/4'>
                         <ul className='w-full flex flex-row items-center  space-x-4'>
                              <li>
                                <span className='flex flex-row space-x-1'>
                                <a className=' font-normal capitalize text-base'>Catagories</a><a className='grid place-content-center'><MdKeyboardArrowDown className='text-base'/></a>
                                </span>
                                </li>
                              <li>
                              <span className='flex flex-row space-x-1 relative'>
                                <a onClick={()=>handleisPage()} className=' font-normal capitalize text-base cursor-pointer'>Pages</a><a onClick={()=>handleisPage()}  className='grid place-content-center'><MdKeyboardArrowDown className='text-base'/></a>

                                <ul className={ispages?'w-36 rounded-sm bg-white top-7 absolute flex flex-col items-center ease-in-out duration-300  shadow-md z-20':'h-0 hidden ease-in-out duration-300 z-0'} >
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/">Home</Link> </li>
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/story">story</Link></li>
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/about us">about us</Link></li>
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/team">team</Link></li>
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/video-category">video category</Link></li>
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/contact us">contact us</Link></li>
                                </ul>
                                </span>
                              </li>
                              <li>
                              <span className='flex flex-row space-x-1'>
                                <a className=' font-normal capitalize text-base'>Contact us</a>
                                </span>
                              </li>
                              <li>
                              <span className='flex flex-row space-x-1'>
                                <a className=' font-normal capitalize text-base'>About us</a>
                                </span>
                              </li>
                         </ul>
                       </span>

                    </div> 
                 </section>
                  {/* logo and links */}

                   
                   {/* search bar and toogle */}
                 <section className='w-2/5 '>
                    <div className='w-full flex flex-row items-center space-x-5'>
                     <article className= {!sunmoon?'w-2/3 bg-[#F5F5F5] rounded-md px-1 py-1':'w-2/3 bg-black rounded-md px-1 py-1'}>
                       <div className='w-full flex flex-row items-center space-x-1'>
                         <a className='w-1/12 grid place-content-center'>
                          <BsThreeDotsVertical className="w-full h-full text-base"/>
                         </a>
                         <span className='w-10/12'>
                            <input type='text' className='w-full h-full bg-[#F5F5F5] outline-none border-0 p-1'/>
                         </span>
                         <a className='w-1/12 grid place-content-center'>
                            <BsSearch className="w-full h-full text-sm"/>
                         </a>
                       </div>
                     </article>
                         
                         <div  onClick={(e)=>handleSun(e)} className={!sunmoon?'w-1/6 border-2  border-black relative rounded-full change':'w-1/6 border-2 border-white relative rounded-full changex'}>
                            <article className='w-full flex flex-row items-center  justify-between relative p-1 '>
                                  <button className='w-1/3 h-full ' >
                                     <MdOutlineWbSunny className={sunmoon?"w-full h-full text-2xl text-white":"w-full h-full text-2xl text-black"} />
                                  </button>
                                  <button  onClick={(e)=>handleSun(e)} className= {!sunmoon?'rounded-full w-6 h-6 circle':'rounded-full w-6 h-6 circlex'} >

                                  </button>

                                  <button  className='w-1/3 h-full ' >
                                     <BsMoon className={!sunmoon?"w-full h-full text-2xl text-black":"w-full h-full text-2xl text-white"}/>
                                  </button>
                            </article>
                         </div>
                    </div>
                 </section>
                {/* search bar and toogle */}

              </article>
              {/* large screen  */}



              {/*tablet screen  */}
              <section className='hidden sm:hidden md:w-10/12 md:block lg:hidden'>
                <div className='w-full flex flex-row items-center justify-between'>
                  <article className=' w-1/3 flex flex-row items-center  space-x-6'>
                     <a className='w-8 h-8 rounded-sm bg-gray-300 grid place-content-center'><GiHamburgerMenu className=' text-2xl text-black' /></a>

                     <span className='h-10 w-24'><img src={!sunmoon?logo:logotwo} className='w-full h-full' /></span>                     
                  </article>

                  <article className='w-1/4 flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                    <span>
                       <img src={userpic} className='h-10 w-10 rounded-sm ' />
                     </span>
                      <div className='flex flex-row items-center space-x-1'><a>Stephen</a><a><MdOutlineKeyboardArrowDown /></a></div>
                    </div>
                     
                    <a className='w-8 h-8 rounded-sm bg-gray-300 grid place-content-center'><FaBookmark className=' text-2xl text-black' /></a>
                  </article>
                </div>
              </section>

              <article className={!sunmoon?'hidden sm:hidden md:w-10/12 md:bg-[#F5F5F5] md:rounded-md md:px-1 md:py-1 md:mt-2 lg:hidden':'hidden sm:hidden md:w-10/12 md:bg-black md:rounded-md md:px-1 md:py-1 md:mt-2 lg:hidden'}>
                       <div className='w-full flex flex-row items-center space-x-1'>
                         <a className='w-1/12 grid place-content-center'>
                          <BsThreeDotsVertical className="w-full h-full text-base"/>
                         </a>
                         <span className='w-10/12'>
                            <input type='text' className='w-full h-full bg-[#F5F5F5] outline-none border-0 p-1'/>
                         </span>
                         <a className='w-24 grid place-content-center'>
                            <BsSearch className="w-full h-full text-sm"/>
                         </a>
                       </div>
                     </article>
              {/* tablet screen */}

               


              {/* small screen */}
               <div className='w-10/12 m-auto sm:w-10/12 sm:m-auto md:hidden lg:hidden'>
                 <section className='w-full flex flex-row items-center justify-between'>
                 <span className='w-35'>
                         <img src={!sunmoon?logo:logotwo} className='h-10 w-30' />
                       </span>


                 
                 <span className='w-1/3 '>
                  <article className='w-full flex flex-row items-center justify-between'>
                    <a className='w-4'>
                      <BsSearch className="w-full h-full text-sm"/>
                      </a>



                      <div  onClick={(e)=>handleSun(e)} className={!sunmoon?'w-auto border-2  border-black relative rounded-full change':'w-auto border-2 border-white relative rounded-full changex'}>
                            <article className='w-full flex flex-row items-center  justify-between relative p-1 '>
                                  <button className='w-1/3 h-full ' >
                                     <MdOutlineWbSunny className={sunmoon?"w-full h-full text-2xl text-white":"w-full h-full text-2xl text-black"} />
                                  </button>
                                  <button  onClick={(e)=>handleSun(e)} className= {!sunmoon?'rounded-full w-6 h-6 circle':'rounded-full w-6 h-6 circlex'} >

                                  </button>

                                  <button  className='w-1/3 h-full ' >
                                     <BsMoon className={!sunmoon?"w-full h-full text-2xl text-black":"w-full h-full text-2xl text-white"}/>
                                  </button>
                            </article>
                         </div>
                      
                  </article>
                  </span>    
                 </section>
               </div>

              {/* small screen */}



              {/* slide bar */}
              <article className='hidden  sm:hidden md:w-full md:fixed md:top-0 md:bottom-0 md:left-0 lg:hidden'>
                <div className='w-1/2 bg-white h-screen py-5'>
                 <article className='w-11/12 m-auto flex flex-row items-center justify-between px-2'>
                 <span>
                 <span ><img src={!sunmoon?logo:logotwo} className='h-10 w-30' /></span>  
                     </span>

                  <span className='w-8 h-8 rounded-sm bg-gray-300 grid place-content-center capitalize font-semibold text-black float-right'>
                    x
                  </span>
                 </article>
                 <section className='w-11/12'>
                  <ul className='w-full flex flex-col items-center mt-10'>

                    <li className="w-full flex flex-col items-center py-2 px-2">
                      <section className='w-11/12 m-auto flex flex-row items-center justify-between py-3 px-3  hover:bg-gray-200 hover:rounded-md'>
                      <span className='w-2/3 text-2xl hover:border-l-4 hover:border-[#FD9005] px-2'>Category</span><span className='w-1/12'><MdOutlineKeyboardArrowRight className='text-2xl' /></span>
                      </section>
                      </li>

                      <li className="w-full flex flex-col items-center py-2 px-2">
                      <section className='w-11/12 m-auto flex flex-row items-center justify-between py-3 px-3 hover:bg-gray-200 hover:rounded-md'  onClick={()=>handleisPage()}>
                      <span className='w-2/3 text-2xl  hover:border-l-4 hover:border-[#FD9005] px-2'>Page</span><span className='w-1/12'><MdOutlineKeyboardArrowRight className='text-2xl' /></span>
                      </section>

                         <article className='w-3/4'>
                         <ul className={ispages?'w-full bg-white  flex flex-col items-center ease-in-out duration-300 ':'h-0 hidden ease-in-out duration-300 z-0'} >
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/">Home</Link> </li>
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/story">story</Link></li>
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/about us">about us</Link></li>
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/team">team</Link></li>
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/video-category">video category</Link></li>
                                  <li className='w-full p-1 text-sm text-left font-medium capitalize text-black'><Link to="/contact us">contact us</Link></li>
                                </ul>
                         </article>
                      </li>


                      <li className="w-full flex flex-col items-center py-2 px-2">
                      <section className='w-11/12 m-auto flex flex-row items-center justify-between py-3 px-3   hover:bg-gray-200 hover:rounded-md'>
                      <span className='w-2/3 text-2xl  hover:border-l-4 hover:border-[#FD9005] px-2'>About us</span><span className='w-1/12'><MdOutlineKeyboardArrowRight className='text-2xl' /></span>
                      </section>
                      </li>

                  </ul>
                 </section>
                </div>
              </article>
              {/* slide bar */}
        </div>
    )
}
