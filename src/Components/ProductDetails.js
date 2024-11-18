// src/Components/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1', image: '/Big-C 1.png' },
  { id: 2, name: 'Product 2', description: 'This is product 2', image: '/cofend Drop-04.png' },
  { id: 3, name: 'Product 3', description: 'This is product 3', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', description: 'This is product 4', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', description: 'This is product 5', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', description: 'This is product 6', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Product 7', description: 'This is product 7', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Product 8', description: 'This is product 8', image: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Product 9', description: 'This is product 9', image: 'https://via.placeholder.com/150' },


  // Add more products as needed
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="p-6">
      {product ? (
        <div>
          <img src={product.image} alt={product.name} className="h-50 w-60" />
          <h1 className="text-3xl font-bold my-4">{product.name}</h1>
          <p className="text-lg">{product.description}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
