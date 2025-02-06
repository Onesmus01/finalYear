import React from 'react';
import { FaFacebook, FaWhatsapp, FaPinterest } from 'react-icons/fa'; // Importing icons from react-icons
import assets from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white py-10 px-6 md:px-16'>
      {/* Footer Logo and Company Name */}
      <div className='flex flex-col sm:flex-row items-center sm:items-start justify-between mb-8'>
        <div className='flex items-center'>
          <img
            src={assets.footer_logo}
            alt='Footer Logo'
            className='w-24 h-24 sm:w-28 sm:h-28 mr-4'
          />
          <p className='text-2xl font-bold text-gray-300'>SHOPPER</p>
        </div>
      </div>

      {/* Footer Links */}
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-sm text-gray-400 mb-6'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>

      {/* Social Media Icons */}
      <div className='flex justify-center sm:justify-start gap-8 mt-6'>
        <div className='text-3xl cursor-pointer hover:text-gray-300'>
          <FaFacebook />
        </div>
        <div className='text-3xl cursor-pointer hover:text-gray-300'>
          <FaWhatsapp />
        </div>
        <div className='text-3xl cursor-pointer hover:text-gray-300'>
          <FaPinterest />
        </div>
      </div>

      {/* Copyright Section */}
      <div className='mt-8 text-center'>
        <hr className='border-gray-600 mb-4' />
        <p className='text-sm text-gray-400'>Copyright @ 2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
