import React, { useState ,useContext} from 'react';
import { NavLink, Link } from 'react-router-dom';
import assets from '../assets/frontend_assets/assets';
import './Hero.css';
import {ShopContext} from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,getCartCount} = useContext(ShopContext)
  
  return (
    <div className='flex items-center justify-between py-5 font-medium border shadow border-gray-300'>
      <Link to='/'>
        <img className='w-36' src={assets.logo} alt='' />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p></p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt='' />

        <div className='group relative'>
          <Link to='/login'>
          <img
            className='-5 cursor-pointer'
            src={assets.profile_icon}
            alt=''
          />
          </Link>
          
          <div
            className={`group-hover:block hidden absolute right-0 pt-4 z-10 ${
              visible ? 'block' : 'hidden'
            }`}
          >
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-blue-400 text-gray-600'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img className='w-7 mr-10' src={assets.shopping_cart} alt='' />
          <p className='absolute mr-10 right-[-10px] bottom-[20px] rounded-full w-4 text-center leading-4 bg-red-500'>
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          className='sm:hidden w-7 cursor-pointer'
          src={assets.menu_icon}
          alt=''
        />
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 bg-white transition-all duration-300 ${
          visible ? 'w-full' : 'w-0'
        } overflow-hidden z-20`}
      >
        <div className='flex flex-col bg-gray-950 text-gray-600'>
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-4 text-gray-600 p-5 cursor-pointer'
          >
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className='pl-6 py-2 border-b border-blue-500'
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='pl-6 py-2 border-b border-blue-500'
            to='/collection'
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='pl-6 py-2 border-b border-blue-500'
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='pl-6 py-2 border-b border-blue-500'
            to='/contact'
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
