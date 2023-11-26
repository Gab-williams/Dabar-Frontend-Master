import React,{useState, useEffect, useContext} from 'react'
import image from '../../thumbnail/city.png'
import { useLocation } from 'react-router-dom';
import { context } from '../../Context';

export default function Top() {
    const created = useContext(context);
    let {client, categoryMenu} = created
    const location = useLocation();

    const [categoriesdata, setCategoriesdata] = useState([])
    let  categoryurl =  location.state.category
    useEffect(()=>{
       let data = categoryMenu.filter((item)=>item.title.toLowerCase() == categoryurl.toLowerCase()) 
       setCategoriesdata(categoriesdata=>data)
    },[])


    return (
        <div className='w-full flex items-center justify-center'>

            <section className=' w-11/12 m-auto sm:w-11/12 sm:m-auto md:w-11/12  md:m-auto lg:w-10/12 mt-10'>
                <div className=' w-full flex flex-col  justify-center  sm:w-full sm:flex sm:flex-col  sm:justify-center   md:w-full md:flex md:flex-col  md:justify-center  lg:w-full lg:flex lg:flex-row  lg:justify-center lg:space-x-3  '>
                    <article className=' w-full m-auto sm:w-full sm:m-auto md:w-full md:m-auto lg:w-2/5'>
                     
                              <ul className='w-full flex flex-col items-center'>
                              <li className='text-lg text-center sm:text-lg sm:text-center md:text-lg md:text-center lg:text-3xl capitalize font-semibold w-full'>Dabar {categoriesdata.length >0?categoriesdata.map((item)=>item.title):"No Category"}</li>
                              {categoriesdata.map((item)=>{
                                return   item.subcategories.map((one, index)=>{
                                  
                                  return  <li className='capitalize font-semibold text-sm text-center w-full' key={index}>-{one}</li>

                                })
                            })}
                              </ul>
                        
                        
                      {/* <ul className='w-full flex flex-col items-center'>
                        <li className='text-lg text-center sm:text-lg sm:text-center md:text-lg md:text-center lg:text-3xl capitalize font-semibold w-full'>Dabar Business Insights</li>
                        <li className='mt-7  capitalize font-semibold text-sm text-center w-full'>-industry insight</li>
                        <li className='capitalize font-semibold text-sm text-center w-full'>-leadership & Management</li>
                        <li className='capitalize font-semibold text-sm text-center w-full'>-corporate responsibility</li>
                        <li className='capitalize font-semibold text-sm text-center w-full'>-Global Economy</li>
                      </ul> */}
                    </article>
                    <div className=' w-full m-auto sm:w-full sm:m-auto md:w-full md:m-auto lg:w-1/2'>
                       <article className='w-full relative'>
                          <img src={image} className='w-full h-60' />
                            <div className='w-full absolute bottom-0  right-0 left-0 text-left px-4 text-white text-sm sm:text-base md:text-lg lg:text-2xl capitalize'>
                                gold price surge surge amid uncertainty and inflation concerns
                            </div>
                       </article>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
