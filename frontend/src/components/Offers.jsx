import React from 'react';
import assets from '../assets/frontend_assets/assets.js';
import './Offers.css';

const Offers = () => {
  return (
    <section className='offer w-full h-[60vh] flex flex-col md:flex-row justify-center items-center py-6 px-4 md:px-[140px] mb-[150px]'>
      <div className='flex-1 flex flex-col justify-center text-center mb-6 md:mb-0'>
        <h1 className='text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold'>EXCLUSIVE</h1>
        <h1 className='text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold'>Offers For You</h1>
        <p className='text-gray-900 text-lg sm:text-xl md:text-2xl font-light mt-4'>
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button
          className='w-3/4 md:w-[282px] mx-auto h-[50px] sm:h-[70px] rounded-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg sm:text-xl'
          aria-label='Check exclusive offers now'
        >
          Check Now
        </button>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={assets.exclusive_image}
          alt='Exclusive Offer'
          className='w-full max-w-md md:max-w-lg'
        />
      </div>
    </section>
  );
};

export default Offers;
