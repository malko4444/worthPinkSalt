'use client'

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/app/hooks/useDirection';

function Home1() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation();
    const { isRTL } = useDirection();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Animate once
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`mt-6 mb-8 flex flex-col-reverse lg:flex-row h-auto bg-gray-100 
                transition-all duration-1000 ease-out 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
        >
            {/* Images Section */}
            {/* Images Section - Hidden on small screens */}
<div className='hidden lg:flex w-full lg:w-[50%] flex-col lg:flex-row items-center justify-center px-4 lg:pl-12 lg:pr-4 pt-8 pb-8 gap-4'>

{/* Left Image */}
<div className='w-full lg:w-1/2 flex justify-center'>
    <img
        src="/images/1.jpg"
        alt="Top Image"
        className='w-full max-w-[240px] h-[200px] object-cover rounded-xl shadow-lg'
    />
</div>

{/* Right Images */}
<div className='w-full lg:w-[220px] flex flex-col gap-4 items-center justify-center'>
    <img
        src="/images/2.jpg"
        alt="Second Image"
        className='w-full max-w-[220px] h-[200px] object-cover rounded-xl shadow-lg'
    />
    <img
        src="/images/3.jpg"
        alt="Third Image"
        className='w-full max-w-[220px] h-[200px] object-cover rounded-xl shadow-lg'
    />
</div>
</div>

            {/* Content Section */}
            <div className='w-full lg:w-[50%] flex items-center lg:pr-8'>
                <div className='p-6 lg:pl-4 lg:pr-8'>
                    <h3 className="text-md lg:text-lg text-yellow-600 font-semibold tracking-widest uppercase mb-3">
                        {t('about1.head')}
                    </h3>

                    <h1 className='text-3xl lg:text-5xl font-extrabold text-gray-800 leading-snug mb-4'>
                        {t('about1.head1').split('Pink Salt').map((part, index, arr) =>
                            index < arr.length - 1 ? (
                                <React.Fragment key={index}>
                                    {part}
                                    <span className='text-yellow-500 font-bold'>Pink Salt</span>
                                </React.Fragment>
                            ) : (
                                <React.Fragment key={index}>{part}</React.Fragment>
                            )
                        )}
                    </h1>

                    <p className='text-gray-700 text-sm lg:text-base leading-relaxed'>
                        {t('about1.desc1')}
                        <br /><br />
                        {t('about1.desc2')}
                    </p>

                    <button className='bg-yellow-400 text-gray-800 px-6 py-3 rounded-full text-base font-semibold hover:bg-yellow-500 transition-all duration-300 mt-4'>
                        {t('about1.readMore')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home1;
