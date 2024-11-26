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
import Products from './Components/Pages/Products'; 
import ContactUs from './Components/Pages/ContactUs'; 
import AboutUs from './Components/Pages/AboutUs';
import ProductList from './Components/ProductList';
import BannerBetween from './Components/BannerBetween';
import SmallBanner from './Components/SmallBanner';


const App = () => {
  const [user, setUser] = useState(null); 
  useEffect(() => { const unsubscribe = onAuthStateChanged(auth, (currentUser) => { 
    setUser(currentUser); }); 
    return () => unsubscribe(); 
  }, []);
  return (
    <>
    <Router>
      <Header />
      <BannerBetween />
      <Navbar />
      <Banner />
      <div className="flex"> <SmallBanner image="/Bio Rest-05.jpg" altText="Small Banner 1" />
      <SmallBanner image="/MovFlex-04 banar.jpg" altText="Small Banner 2" /> 
      </div>
      <div className='pt-20'>
      <Routes>
        <Route path="/signup" element={<Auth />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/signup" />} />
        <Route path="/product/:id" element={<ProductDetails />} />  
        <Route path="/products" element={<Products />} /> 
        <Route path="/contactus" element={<ContactUs />} /> 
        <Route path="/aboutus" element={<AboutUs />} />      
        <Route path="/" element={<Auth />} />
      </Routes>
      </div>
    </Router>

    </>
  );
};

export default App;
