import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
export default function Body(props) {
  const {para} = props
    return (
        <div className='w-full flex flex-col items-center mt-5'>
          {/* {documentToReactComponents(para)} */}
          {para.length >0? para.map((item)=>{
            return item.content.map((one, index)=>{
               return <div key={index}>{documentToReactComponents(one)}</div>
              // return<div className='text-md text-left capitalize font-regular mt-2' key={index}>
              //   {one.value}
              // </div>
            })
          }): 
          <SkeletonTheme  color="#5e6c77" highlightColor="#a9b7c1">
            <p>
            <Skeleton width={500} count={15} duration={2}  />
            </p>
           </SkeletonTheme>
          }
           
        </div>
    )
}
