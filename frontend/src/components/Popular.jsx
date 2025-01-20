import React from 'react';
import data_product from '../assets/frontend_assets/data'; // Make sure this path is correct

const Popular = () => {
  return (
    <div className='popular bg-gray-100 py-10 px-5'>
      <h1 className='text-3xl font-semibold text-gray-900 mb-4'>POPULAR IN WOMEN</h1>
      <hr className='mb-8 border-gray-300' />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data_product.map((item, i) => (
          <div key={i} className='bg-white rounded-lg shadow-md p-9'>
            <img src={item.image} alt={item.name} className='w-full h- object-cover rounded-lg mb-4' />
            <h2 className='text-lg font-semibold text-gray-800'>{item.name}</h2>
            <div className='flex items-center justify-between mt-2'>
              <span className='text-gray-500 text-sm line-through'>{item.old_price}</span>
              <span className='text-red-500 font-semibold'>{item.new_price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
