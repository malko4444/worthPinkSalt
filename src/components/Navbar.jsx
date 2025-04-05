'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useDirection } from '@/app/hooks/useDirection'
import { FaSearch } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  return (
    <nav className='font-sans bg-gradient-to-r from-gray-100 to-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo section */}
          <div className='flex-shrink-0'>
            <Image 
              src="/logo.png" 
              alt="Company Logo" 
              width={100} 
              height={30}
              className='object-contain'
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className={`flex items-center space-x-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <NavLink href="/">{t('home')}</NavLink>
              <NavLink href="/about">{t('about')}</NavLink>
              <NavLink href="/services">{t('services')}</NavLink>
              <NavLink href="/contact">{t('contact')}</NavLink>
              <button 
                className='bg-yellow-400 text-gray-800 px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors duration-300 text-base font-semibold'
              >
                {t('consultation')}
              </button>
              <button 
                className='text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2'
                aria-label="Search"
              >
                <FaSearch size={20} />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600'
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth={2} 
                  d='M4 6h16M4 12h16M4 18h16' 
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth={2} 
                  d='M6 18L18 6M6 6l12 12' 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <MobileNavLink href="/">{t('home')}</MobileNavLink>
          <MobileNavLink href="/about">{t('about')}</MobileNavLink>
          <MobileNavLink href="/services">{t('services')}</MobileNavLink>
          <MobileNavLink href="/contact">{t('contact')}</MobileNavLink>
          <div className='pt-4'>
            <button 
              className='w-full bg-yellow-400 text-gray-800 px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors duration-300 text-base font-semibold'
            >
              {t('consultation')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Helper components for navigation links
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className='text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300'
  >
    {children}
  </a>
)

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className='text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-lg font-medium'
  >
    {children}
  </a>
)

export default Navbar