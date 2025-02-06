
import React from 'react'
// import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import LatestCollection from '../components/LatestCollection.jsx'
import Offers from '../components/Offers.jsx'
import NewsLetter from '../components/NewsLetter.jsx'
import Footer from '../components/Footer'
import Popular from '../components/Popular'
import Blog from '../components/Blog.jsx'
import OurPolicy from '../components/OurPolicy.jsx'

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Popular />
      <LatestCollection />
      <Offers />
      <h1 className='mb-10 text-center font-bold text-5xl'>GT EXCLUSIVE OFFERS</h1>
      <hr className='mb-10 bg-gray-400 h-[2px]' />
      <NewsLetter />
      <hr className='mb-10 h-[2px] bg-gray-400' />
      <OurPolicy />
      <Blog />


    </div>
  )
}

export default Home
