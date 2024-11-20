// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Auth from './Components/Auth';
import { auth } from './Firebase'; 
import { onAuthStateChanged } from 'firebase/auth';
import ProductDetails from './Components/ProductDetails';
import Banner from './Components/Banner';
import Header from './Components/Header';
import ProductList from './Components/ProductList';

const App = () => {
  const [user, setUser] = useState(null); 
  useEffect(() => { const unsubscribe = onAuthStateChanged(auth, (currentUser) => { 
    setUser(currentUser); }); 
    return () => unsubscribe(); 
  }, []);
  return (
    <>
    <Router>
      <Navbar />
      <Header />
      <Banner />
      <Routes>
        <Route path="/signup" element={<Auth />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/signup" />} />
        <Route path="/product/:id" element={<ProductDetails />} />        
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>

    </>
  );
};

export default App;
