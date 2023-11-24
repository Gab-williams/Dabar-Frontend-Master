import React from 'react'
import Keypoint from './Keypoint'
import Body from './Body'
import Author from './Author'
import Related from './Related'
import Comment from './Comment'
import Adds from './Adds'
import Subscrib from './Subscrib'
export default function Storypart(props) {
    const {writer, para, category, solidfc} = props
  
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            
            <section className='w-10/12 mt-14'>
                <div className='w-full flex flex-col  justify-between sm:w-full sm:flex sm:flex-col   md:w-full md:flex md:flex-col  lg:w-full lg:flex lg:flex-row  lg:justify-between '>
                    <section className='w-full sm:w-full md:w-full lg:w-3/5'>
                          {/* <Keypoint/> */}
                          <Body para={para}/>
                          <Comment/>
                          <Adds/>
                    </section>

                    <div className='w-full sm:w-full md:w-full lg:w-[35%]   flex flex-col items-center'>
                             <Author writer={writer}/>
                             <Related  category={category.category} solidfc={solidfc}/>
                    </div>
                </div>
            </section>
            <Subscrib/>
        </div>
    )
}
