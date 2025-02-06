import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ShopContext} from '../context/ShopContext.jsx';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext) || {};

  return (
    <Link
      className="block text-gray-800 hover:text-gray-900 transition-colors duration-200"
      to={`/product/${id}`}
    >
      {/* Image Wrapper */}
      <div className="relative group">
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            className="w-full h- object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            src={image?.[0] || '/default-image.jpg'} 
            alt={name || 'Product Image'}
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-3">
        <p className="text-base font-medium leading-snug truncate">{name}</p>
        <p className="text-sm text-gray-500">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
