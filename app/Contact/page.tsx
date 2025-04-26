import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from './hero'
import Contact from './contact'

function page() {
  return (
    <div className='bg-[#130f0c]'>
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
