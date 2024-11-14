// src/Components/Home.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/signup'); // Redirect to signup page after logout
      })
      .catch((error) => {
        console.log('Logout Error:', error.message);
      });
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="space-x-4">
          <Link to="/home" className="hover:text-blue-400">Home</Link>
          <Link to="/shop" className="hover:text-blue-400">Shop</Link>
          <Link to="/contactus" className="hover:text-blue-400">Contact Us</Link>
          <Link to="/aboutus" className="hover:text-blue-400">About Us</Link>
        </div>
        <div>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 p-2 rounded-md">Logout</button>
        </div>
      </nav>
      <h1 className="text-center mt-4 text-2xl">Welcome to the Home Page!</h1>
    </div>
  );
};

export default Home;
