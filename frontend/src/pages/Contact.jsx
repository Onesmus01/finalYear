import React from 'react';
import Title from '../components/Title';
import assets from '../assets/frontend_assets/assets';
import NewsLetter from '../components/NewsLetter';

const Contact = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 bg-gray-50 text-gray-900">
      <div className='text-center text-3xl font-semibold py-8 border-t border-gray-300'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28 items-center">
        <img src={assets.contact_img} alt="Contact Us" className='w-full md:max-w-[480px] rounded-lg shadow-lg' />
        <div className="flex flex-col justify-center items-start gap-6 text-lg leading-relaxed">
          <p className='font-semibold text-2xl text-gray-700'>Our Store</p>
          <p className='text-gray-600'>6450 Liby Station <br />Suite 256, Nairobi, Kenya</p>
          <p className='text-gray-600'>Tel: (254) 7 5975-5575 <br />Email: admin@Logo.com</p>
          <p className='font-semibold text-2xl text-gray-700'>Careers at Forever</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>
          <button className='border border-blue-500 px-8 py-4 text-lg font-medium rounded-md hover:bg-blue-500 hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Contact;