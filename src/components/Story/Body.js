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
           
            
            {/* <p className='text-md text-left capitalize font-regular mt-6'>
            Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. 
            Engraved attention to detail elegant with neutral colours cheme 
            </p>

              <span className='flex flex-row items-center mt-20'>
                <a className='text-3xl font-bold w-14 '>"</a>

                <a className='w-full text-3xl text-left capitalize font-bold'>
                KINCKER LINING CONCEALED BACK ZIP FASTEN SWING STYLE HIGH WAITSTED DOUBLE LAYER FULL PATTERN FLORAL
                </a>
                <a className='text-3xl font-bold w-14 '>"</a>
              </span>

              <p className='text-md text-left capitalize font-regular mt-20'>
              Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. 
              Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. 
              Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design
              </p>
              <p className='text-md text-left capitalize font-regular mt-4'>
              Eget aenean tellus venenatis. Donec odio tempus. 
              Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. 
              Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut.
               Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean. 
              </p> */}

        </div>
    )
}
