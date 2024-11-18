// src/Components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'BIG-C', image: '/Big-C 1.png' },
  { id: 2, name: 'COFEND', image: '/cofend Drop-04.png' },
  { id: 3, name: 'CLICK', image: '/Click-04.png' },
  { id: 4, name: 'COLLA-GO', image: '/Colla-Go.png' },
  { id: 5, name: 'FERROLAT', image: '/Ferrolat-20.png' },
  { id: 6, name: 'MOVFLEX', image: '/Movflex Spray-04.png' },
  { id: 7, name: 'MULTINER', image: '/Multiner Drop-20.png' },
  { id: 8, name: 'SAVEKAL', image: '/Savekal Drop-20.png' },
  { id: 9, name: 'CROSFA', image: '/Crosfa Sachet-38.png' },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-4 ">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
