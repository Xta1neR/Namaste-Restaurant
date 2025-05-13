import React from 'react'
import Hero from './components/hero'
import Header from '../components/header'
import Footer from '../components/footer'
import Reservation from '../components/reservation'
import Menu from './components/menu'
import PopupNotice from '../components/PopupNotice'

function page() {
  return (
    <div className='bg-[#130f0c]'>
      <PopupNotice />
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <Footer />
    </div>
  )
}

export default page
