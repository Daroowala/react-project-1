// src/Components/BannerBetween.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BannerBetween = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="w-full bg-gray-100 flex justify-between items-center p-4  top-20 z-40">
      <div className="flex items-center">
        <img src="/Logo.png" alt="Logo" className="h-40 " /> 
      </div>
      <div className="flex items-center">
        <Link to="/wishlist" className="relative mr-4">
          <img src="/path/to/wishlist-icon.png" alt="Wishlist" className="h-8" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{wishlistCount}</span>
        </Link>
        <Link to="/cart" className="relative">
          <img src="/path/to/cart-icon.png" alt="Cart" className="h-8" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>
        </Link>
      </div>
    </div>
  );
};

export default BannerBetween;
