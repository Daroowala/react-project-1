// src/Components/BannerBetween.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const BannerBetween = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0.0);

  const handleAddToCart = (price) => { 
    setCartCount(cartCount + 1); 
    setCartTotal(cartTotal + price); };

  return (
    <div className="w-full bg-gray-100 flex justify-between items-center p-4  top-20 z-40">
      <div className="flex items-center">
        <img src="/Logo.png" alt="Logo" className="h-40 " /> 
      </div>
      <div className="flex items-center">
        <Link to="/wishlist" className="relative mr-4">
        <FontAwesomeIcon icon={faHeart} className="h-8 text-red-500" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{wishlistCount}</span>
        </Link>
        <Link to="/cart" className="relative">
        <FontAwesomeIcon icon={faShoppingCart} className="h-8 text-green-500" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>
        </Link>
        <div className="ml-4"> <span className="text-blue-900 font-bold">Rs {cartTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default BannerBetween;
