import React from 'react'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

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
    </div>
  )
}