import React from 'react'
import Keypoint from './Keypoint'
import Body from './Body'
import Author from './Author'
import Related from './Related'
import Subscrib from './Subscrib'
import Advert2 from '../Home/Advert2'
export default function Storypart(props) {
    const {writer, para, category, client, keypoints} = props
   
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            
            <section className='w-9/12 mt-14 mb-20'>
                <div className='w-full flex flex-col  justify-between sm:w-full sm:flex sm:flex-col   md:w-full md:flex md:flex-col  lg:w-full lg:flex lg:flex-row  lg:justify-between '>
                    <section className='w-full sm:w-full md:w-full lg:w-3/5'>
                          <Keypoint keypoints={keypoints}/>
                          <Body para={para}/>
                          <Advert2 />
                    </section>

                    <div className='w-full sm:w-full md:w-full lg:w-[35%]   flex flex-col items-center'>
                             <Author writer={writer}/>
                             <Related client={client} category={category.category}/>
                    </div>
                </div>
            </section>
            <Subscrib/>
        </div>
    )
}
