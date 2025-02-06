import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title.jsx';
import assets from '../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';
import CartTotal from '../components/CartTotal.jsx';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = Object.entries(cartItems).flatMap(([productId, sizes]) =>
      Object.entries(sizes)
        .filter(([_, qty]) => qty > 0)
        .map(([size, quantity]) => ({
          _id: productId,
          size,
          quantity,
        }))
    );

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className="text-2xl mb-3 text-center font-semibold">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartData.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Your cart is empty!</p>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find(product => product._id === item._id);

            return (
              <div
                key={`${item._id}-${item.size}`}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20 object-cover"
                    src={productData.image[0] || assets.placeholder_image}
                    alt={productData?.name || "Product Image"}
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">{productData?.name}</p>
                    <p className="text-sm text-gray-600">
                      {currency ?? "$"}{productData?.price}
                    </p>
                    <p className="text-xs text-gray-500">Size: {item.size}</p>
                  </div>
                </div>

                <input
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                />

                <img
                  src={assets.bin_icon}
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-4 sm:w-5 cursor-pointer"
                  alt="Remove item"
                />
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-blue-500 text-white text-sm my-8 px-8 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200 ease-in-out"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
