import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default function Body(props) {
  const {para} = props
  console.log(para)
    return (
        <div className='w-full flex flex-col items-center mt-5'>
          {/* {documentToReactComponents(para)} */}
          {para.map((item)=>{
            return item.content.map((one, index)=>{
               return <div key={index}>{documentToReactComponents(one)}</div>
              // return<div className='text-md text-left capitalize font-regular mt-2' key={index}>
              //   {one.value}
              // </div>
            })
          })}
           
        </div>
    )
}
