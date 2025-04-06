import React from 'react';

function Products() {
  return (
    <div className='h-screen flex flex-col bg-gray-100 px-4 sm:px-6 lg:px-12 py-4'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4'>
        Our <span className='text-yellow-500'>Worth Pink Salt</span> Products
      </h1>

      <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
        {[1, 2, 5, 4].map((num) => (
          <div
            key={num}
            className='group bg-white rounded-lg overflow-hidden 
                       shadow-md hover:shadow-xl 
                       transition-all duration-300
                       w-full max-w-[220px] sm:max-w-[250px] lg:max-w-[270px] transform hover:-translate-y-1 hover:scale-105'
          >
            <div className='relative h-40 sm:h-48'>
              <img
                src={`/images/${num}.jpg`}
                alt={`Product ${num}`}
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
            <div className='p-4 text-center bg-white group-hover:bg-gray-50 transition-all duration-300'>
              <h2 className='text-sm sm:text-base font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300'>
                Product {num}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
