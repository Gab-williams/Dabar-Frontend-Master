import React from 'react'

export default function Keypoint(props) {
    const {keypoints} = props
    return (
        <div className='w-full flex flex-col items-center bg-gray-100 mb-10 border border-gray-400 py-2 pb-6'>
            <span className='w-10/12 text-black capitalize font-bold text-left mt-5'>
                 Key Points
                </span>   
                <ul className='w-10/12 flex flex-col items-center  float-left py-3'>
                    {keypoints.map((item, index)=>{
                        return  <li className='w-full text-black text-md text-left capitalize mt-2'>
                         {item.content.map((items)=>{
                            return items.value
                        })}
                      </li>
                    })}
                    
                  
                </ul>
        </div>
    )
}
