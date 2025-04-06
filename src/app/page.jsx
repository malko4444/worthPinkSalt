import React from 'react'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Home1 from '@/components/Home1'
import '@/i18n' // adjust path if necessary
import Products from '@/components/Products'


export default function Page() {
  return (
    <div>
      <div className='hidden md:block'>
        <Topbar />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection/>
      </div>
      <div>
        <Home1/>
      </div>
      <div>
        <Products/>
      </div>
    </div>
  )
}