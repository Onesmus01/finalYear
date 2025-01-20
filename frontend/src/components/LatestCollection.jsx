import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import Title from './Title';
import ProductItem from './ProductItem.jsx';

const LatestCollection = () => {
  const { products } = useContext(ShopContext); // Accessing products from context
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Fetch the latest 10 products
  }, [products]); // Add 'products' as a dependency to watch for changes

  return (
    <div className="my-10">
      <div className="text-center  py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className="w-3/4 text-gray-900 m-auto font-semibold text-sm sm:text-sm md:text-base opacity-[70%]">
          Style is timeless, and so is your wardrobe. Discover premium clothing that fits every occasion. Whether you are dressing up for a special event or keeping it casual, our collection is designed to make you look and feel your best. From sleek outerwear to trendy accessories, we have got you covered with outfits that inspire confidence.
        </p>
      </div>
      {/* Rendering products */}
      <div className="grid grid-cols-2 m-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index} // Use index as the unique key if no better unique identifier is available
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
