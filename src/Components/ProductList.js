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
          <div className="text-center">
            <h2 className="text-lg font-bold mb-2">Top Rating</h2>
            <ProductCard key={products[3].id} {...products[3]} isTopProduct={true} />
          </div>
        </div>
      </div>
      
      {/* Promotion Box */}
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Buy 2 Get 1 Promotion</h2>
        <div className="bg-green-100 p-4 rounded-lg shadow-lg col-span-3">
          <p className="text-lg font-semibold">Buy any 2 products and get 1 product free! Limited time offer.</p>
        </div>
      </div>

      {/* Remaining Products */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {products.slice(4).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
