import React from 'react'
import Header from './main/Header'
import Body from './Ig_Grid/Body'
import MobileNav from './Home/MobileNav'

export default function Ig_Grid() {
    return (
        <div className='w-full'>
            <Header/>
            <MobileNav/>
             <Body/>
        </div>
    )
}
