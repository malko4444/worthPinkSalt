import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import React from 'react'

export default function Page() {
    return (
        <div>
            <div className='hidden md:block'>
            <Topbar />
            </div>
            
            <Navbar />

            {/* Banner Section */}
            <div className="relative pb-20 flex justify-center items-center">
                <img className='h-[350px] w-screen object-cover z-0' src="/images/1.jpg" alt="About Banner" />
                <h1 className='py-10 px-10 z-10 text-5xl font-black absolute text-white top-28 left-1/2 transform -translate-x-1/2 text-center'>
                    About Us
                </h1>
            </div>

            {/* CEO Message Section */}
            <div className='bg-blue-100 py-10 px-4 md:px-20'>
                <h1 className='text-center font-bold text-3xl md:text-4xl mb-8'>
                    CEO <span className='text-yellow-400'>Message</span>
                </h1>
                <p className='text-gray-800 leading-relaxed text-justify text-base md:text-lg'>
                    Over the years we stick to our single motive that is to provide high-quality Himalayan pink salt all over the world by implementing new research and modern crafting techniques. Besides this, we ensure that our products satisfy customers’ needs in every single perspective by keeping quality of the utmost priority. This has enabled us to become the best Himalayan pink salt distributor company all over the world.
                    <br /><br />
                    We envision giving the most promising results by administering the manufacture of every single product from the root level to its finished stage. We strive to pursue the attainment of performance and achievement by adopting effective and safe mining methods to extract sea salt in bulk quantities and transforming it into multifarious pink rock salt products by keeping the highest purity level possible.
                </p>
            </div>

            {/* About Product Section */}
            <div className='w-full max-w-[90rem] mx-auto bg-gray-100 py-12 px-4 md:px-20 flex flex-col md:flex-row justify-center items-center gap-10'>
                {/* Image */}
                <div className='w-full md:w-5/12 flex justify-center'>
                    <img className='h-[310px] w-[320px] rounded shadow-lg object-cover' src="/images/1.jpg" alt="Pink Salt" />
                </div>

                {/* Text */}
                <div className='w-full md:w-7/12'>
                    <h1 className='text-3xl md:text-4xl font-bold text-center mb-6'>
                        Top Quality <span className='text-yellow-400'>Pink Salt</span> Company
                    </h1>
                    <p className='text-justify text-gray-700 leading-relaxed text-base md:text-lg'>
                        Our international quality control procedures and skilled professionals vow to provide you with premium quality Himalayan pink salt products that make <strong>Pak Pink Salt</strong> the most trusted source of choice for wholesalers, importers, multinational brands, and international dealers all around the globe.
                        Our hand-picked experts carefully craft and meticulously superintend the balance of every single element in the manufacturing of our products, so we can set our standards “sky-scraping” in the world by providing our customers with the world’s leading excellent quality at top value.

                        We mine and manufacture the world’s best organic salt products that are crafted from Himalayan rock salt to provide great health benefits to our customers internationally in the UK, USA, Japan, India, Malaysia, Canada, etc., making <strong>Pak Pink Salt</strong> a top-quality pink salt business partner, distributor, manufacturer, and supplier worldwide.

                        We strive for excellence and accomplishment of quality standards becoming the best Himalayan salt business partner and exporter worldwide.
                    </p>
                </div>
            </div>
        </div>
    )
}
