import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from './hero'
import Contact from './contact'
import Reservation from '../components/reservation'

function page() {
  return (
    <div className='bg-[#130f0c]'>
      <Header />
      <Hero />
      <Contact />
      <Reservation />
      <Footer />
    </div>
  )
}

export default page
