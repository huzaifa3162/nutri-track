import React from 'react'
// import Preloader from './Preloader'
import MainBanner from './MainBanner'
import Features from './Features'
import CallToAction from './CallToAction'
import Reviews from './Reviews'
import Header from './Header'
import Footer from './Footer'

function Home() {
  return (
    <div>
    {/* <Preloader/> */}
    <Header/>
    <MainBanner/>
    <Features/>
    <CallToAction/>
    <Reviews/>
    <Footer/>
  </div>
  )
}

export default Home
