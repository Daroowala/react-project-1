// src/Components/CategoriesBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Pain & Fever Relief', path: '/category1' },
  { name: 'Premenstrual Care', path: '/category2' },
  { name: 'Skin Care', path: '/category3' },
  { name: 'Stomach Remedies', path: '/category4' },
];

const CategoriesBar = () => {
  return (
    <nav className="bg-gray-200 text-black font-semibold p-4 flex gap-24">
      {categories.map((category) => (
        <Link to={category.path} key={category.name} className="hover:text-blue-800">
          {category.name}
        </Link>
      ))}
    </nav>
  );
};

export default CategoriesBar;
