import React from 'react';
import ProductCard from './ProductCard';
import ServiceBar from './ServiceBar';

const products = [
  { id: 1, name: 'BIG-C', image: '/Big-C 1.png' },
  { id: 2, name: 'COFEND', image: '/cofend Drop-04.png' },
  { id: 3, name: 'CLICK', image: '/Click-04.png' },
  { id: 4, name: 'COLLA-GO', image: '/Colla-Go.png' },
  { id: 5, name: 'FERROLAT', image: '/Ferrolat-20.png' },
  { id: 6, name: 'MOVFLEX', image: '/Movflex Spray-04.png' },
  { id: 7, name: 'SAVEKAL', image: '/Savekal Drop-20.png' },
];

const ProductList = () => {
  return (
    <div className="p-4">
      {/* Top Product Section */}
      <div className="mb-8">
        <div className="grid grid-cols-4 gap-4">
          {products.slice(0, 3).map(product => (
            <ProductCard key={product.id} {...product}/>
          ))}
          <div className="text-center bg-blue-300 rounded-lg shadow-lg col-span-1 border-2 border-red-800">
            <h2 className="text-3xl flex justify-center text-red-700 font-bold mb-4">Top Rating</h2>
            <ProductCard key={products[3].id} {...products[3]} isTopProduct={true} />
          </div>
        </div>
      </div>
      
      {/* Promotion Box */}
      <div className="grid grid-cols-4 gap-4 my-8">
        {products.slice(4, 7).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
        <div className="bg-blue-300 p-4 rounded-lg shadow-lg col-span-1 border-2 border-red-800">
          <h2 className="text-3xl flex justify-center text-red-700 font-bold mb-4">MOVFLEX</h2>
          <p className="text-lg font-semibold">Buy 2 Get 1 Free!!! Limited Time Offer.</p>
          <img src="/Movflex Spray-04.png" alt="Promotion" /> 
        </div>
      </div>

      {/* Remaining Products */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {products.slice(7).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <ServiceBar />
    </div>
  );
};

export default ProductList;
