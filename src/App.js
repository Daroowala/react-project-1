// src/App.js
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase/Firebase';

const App = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const toggleForm = () => {
    setIsSignup(!isSignup);
    setEmail('');
    setPassword('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setMessage('Signup successful!');
          console.log('Signed Up:', user);
          navigate('/home'); // Redirect to Home after signup

        })
        .catch((error) => {
          setMessage(error.message);
          console.error('Signup Error:', error);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setMessage('Login successful!');
          console.log('Logged In:', user);
        })
        .catch((error) => {
          setMessage(error.message);
          console.error('Login Error:', error);
        });
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div>
       <Navbar />
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      
    <Routes>
    <Route  path="/signup"
            element={
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md w-80">
        <h2 className="text-2xl font-bold mb-4">{isSignup ? 'Sign Up' : 'Login'}</h2>
        {message && <p className="mb-4 text-green-500">{message}</p>}
        
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email:</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password:</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>

        <p className="mt-4 text-center">
          {isSignup ? 'Already have an account?' : "Don't have an account?"} 
          <button type="button" onClick={toggleForm} className="text-blue-500 ml-1">
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </form>
        }
        />
      <Route path="/home" element={<Home />} />
      </Routes>
    </div>
    </div>
  );
};

export default App;
