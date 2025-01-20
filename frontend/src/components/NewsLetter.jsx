import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='w-50% items-center justify-center  h-[70vh] mt-0 m-auto bg-gray-100'>
    <div className='newsLetter   bg-gray-900 text-white py-12 px-6 sm:px-12 md:px-16 rounded-lg'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
        Get Exclusive Offers on Your Email
      </h1>
      <p className='text-lg sm:text-xl font-light mb-6'>
        Subscribe to our newsletter and stay updated
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4'>
        <input
          type='email'
          placeholder='Your Email id'
          className='w-full sm:w-[300px] md:w-[400px] px-4 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 sm:mt-0 cursor-pointer'>
          Subscribe
        </button>
      </div>

    </div>
        <hr className='mb-10' />

    </div>
  );
};

export default NewsLetter;
