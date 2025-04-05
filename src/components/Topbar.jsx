'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaInstagram, FaYoutube, FaFacebookF, FaClock, FaEnvelope } from 'react-icons/fa'
import { useDirection } from '@/app/hooks/useDirection'

function Topbar() {
    const { t } = useTranslation()
    const { dir, isRTL } = useDirection()

    return (
        <div 
            className='bg-blue-900 text-white px-16 py-3 font-sans' 
            dir={dir}
        >
            <div className='flex flex-col md:flex-row justify-between items-center'>
                {/* Left section */}
                <div className={`flex gap-9 mb-2 md:mb-0 text-sm md:text-base items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <p className='flex items-center gap-2'>
                        {!isRTL && <FaClock />}
                        {t('time')}
                        {isRTL && <FaClock />}
                    </p>
                    <p className='flex items-center gap-2'>
                        {!isRTL && <FaEnvelope />}
                        {t('email')}
                        {isRTL && <FaEnvelope />}
                    </p>
                </div>

                {/* Right section */}
                <div className={`flex items-center gap-5 text-sm md:text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex items-center gap-2`}>
                        {!isRTL && <p className='font-semibold'>{t('social')}</p>}
                        <div className={`flex gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 transition duration-300'>
                                <FaInstagram size={18} />
                            </a>
                            <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='hover:text-red-500 transition duration-300'>
                                <FaYoutube size={18} />
                            </a>
                            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500 transition duration-300'>
                                <FaFacebookF size={18} />
                            </a>
                        </div>
                        {isRTL && <p className='font-semibold'>{t('social')}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar