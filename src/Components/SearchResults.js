import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import products from './ProductList'; // Import your products data

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery();
  const searchQuery = query.get('query');

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-auto mb-2" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
