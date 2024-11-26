// src/Components/SmallBanner.js
import React from 'react';

const SmallBanner = ({ image, altText }) => {
  return (
    <div className="w-1/2 p-2">
      <img 
        src={image} 
        alt={altText} 
        className="w-full h-auto object-cover" 
      />
    </div>
  );
};

export default SmallBanner;
