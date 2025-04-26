import React from 'react'
import Hero from './components/hero'
import Header from '../components/header'
import Footer from '../components/footer'
import Reservation from '../components/reservation'

function page() {
  return (
    <div className='bg-[#130f0c]'>
      <Header />
      <Hero />
      <Reservation />
      <Footer />
    </div>
  )
}

export default page
