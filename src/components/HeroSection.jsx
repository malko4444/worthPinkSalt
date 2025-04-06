'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import './style.css'

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation()

  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-container">
      {images.map((image, index) => (
        <div 
          key={image}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <Image
            src={image}
            alt={`Hero Image ${index + 1}`}
            fill
            className="hero-image"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="hero-content">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-slide-in px-4 md:px-0">
          {t('hero.head')}
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-0 animate-slide-in delay-200 max-w-2xl px-4 md:px-0">
          {t('hero.desc')}
        </p>
        <button className="bg-yellow-400 text-gray-800 px-6 md:px-8 py-3 rounded-full 
          text-base md:text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 
          w-fit opacity-0 animate-slide-in delay-400">
          {t('consultation')}
        </button>
      </div>
      
    </div>
  )
}

export default HeroSection