import React from 'react';
import { NavLink } from 'react-router-dom';
import assets from '../assets/admin_assets/assets.js';

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen bg-gray-900 text-white border-r border-gray-700 shadow-lg">
      <div className="flex flex-col gap-6 text-[15px] pt-6 pl-[15%]">
        <NavLink 
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-800" 
          to="/add"
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink 
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-800" 
          to="/list"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="List" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink 
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-800" 
          to="/orders"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Orders" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
