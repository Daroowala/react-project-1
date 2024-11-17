// src/Components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', image: '/Big-C 1.png' },
  { id: 2, name: 'Product 2', image: '/cofend Drop-04.png' },
  { id: 3, name: 'Product 3', image: '/Click-04.png' },
  { id: 4, name: 'Product 4', image: '/Colla-Go.png' },
  { id: 5, name: 'Product 5', image: '/Ferrolat-20.png' },
  { id: 6, name: 'Product 6', image: '/Movflex Spray-04.png' },
  { id: 7, name: 'Product 7', image: '/Multiner Drop-20.png' },
  { id: 8, name: 'Product 8', image: '/Savekal Drop-20.png' },
  { id: 9, name: 'Product 9', image: '/Crosfa Sachet-38.png' },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
