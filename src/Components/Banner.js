// src/Components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-auto overflow-hidden">
      <img 
        src="/Untitled-3-02.jpg" 
        alt="Banner" 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
      </div>
    </div>
  );
};

export default Banner;
