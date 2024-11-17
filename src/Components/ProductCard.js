// src/Components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, image }) => {
  return (
    <div className="max-w-sm w-72 rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <Link to={`/product/${id}`} className="bg-blue-500 text-white py-2 px-4 rounded">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
