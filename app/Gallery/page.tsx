import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Reservation from '../components/reservation'
import Hero from './hero'
import Gallery from './gallery'

function page() {
  return (
    <div className='bg-[#130f0c]'>
      <Header />
      <Hero />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  )
}

export default page