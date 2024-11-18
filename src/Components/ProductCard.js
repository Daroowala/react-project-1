// src/Components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, image }) => {
  return (
    <div className="h-50 w-48 rounded overflow-hidden shadow-2xl bg-blue-300 m-10">
      <img className="w-full" src={image} alt={name} />
      <div className="px-9 py-3">
        <div className="font-bold text-xl mb-2">{name}</div>
        <Link to={`/product/${id}`} className="bg-red-600 hover:bg-blue-800 text-white py-2 px-4 rounded">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
