import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShopContext from '../context/ShopContext.jsx';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext) || {};

  return (
    <Link
      className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200"
      to={`/product/${id}`}
    >
      <div className="relative group">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-[250px object-cover group-hover:scale-110 transition-transform ease-out duration-300"
            src={image?.[0] || '/default-image.jpg'}
            alt={name}
          />
        </div>
      </div>
      <div className="pt-3 pb-1">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{currency}{price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
