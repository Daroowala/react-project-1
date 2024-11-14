// src/Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Left Side Navbar Links */}
        <div className="flex space-x-4">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Right Side Logout Link */}
        <div>
          <Link to="/signup" className="hover:text-gray-300">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
