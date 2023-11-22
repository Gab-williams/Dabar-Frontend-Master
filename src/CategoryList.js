import React from 'react'
import Header from './components/main/Header'
import Top from './components/CategoryList/Top'
import Body from './components/CategoryList/Body'
import Footer from './components/main/Foooter'
import MobileNav from './components/Home/MobileNav'
import Category from './components/Home/Category'

export default function CategoryList() {
    return (
        <div>
            <Header/>
            <Top/>
            <Category/>
            <MobileNav/>
            <Body/>
           <Footer/> 
        </div>
    )
}
