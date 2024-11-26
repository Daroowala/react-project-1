// src/Components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';

const Navbar = () => {
    const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         }); return () => unsubscribe();
         }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/signup');
      })
      .catch((error) => {
        console.error('Logout Error:', error);
      });
  };

  return (
    <>
      <nav className="bg-gray-800 text-white p-5  w-full top-64 z-30">
        <div className="flex justify-between items-center">
          <div className="flex space-x-16">
          <Link to="/home" className={`hover:text-blue-400 ${!user ? 'pointer-events-none text-gray-500' : ''}`}>HOME</Link>
          <Link to="/shop" className={`hover:text-blue-400 ${!user ? 'pointer-events-none text-gray-500' : ''}`}>PRODUCTS</Link> 
          <Link to="/about" className={`hover:text-blue-400 ${!user ? 'pointer-events-none text-gray-500' : ''}`}>ABOUT US</Link> 
          <Link to="/contact" className={`hover:text-blue-400 ${!user ? 'pointer-events-none text-gray-500' : ''}`}>CONTACT US</Link>
          </div>

          <div>
          {user ? ( <button onClick={handleLogout} className="bg-red-500 hover:text-blue-400 hover:bg-red-600 p-2 rounded-md">Logout</button> ) 
          : ( <Link to="/signup" className="bg-green-500 hover:text-blue-400 hover:bg-green-600 p-2 rounded-md">Login</Link> )}
          
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
