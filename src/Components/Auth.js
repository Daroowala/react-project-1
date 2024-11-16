// src/Components/Auth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const Auth = () => {
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
          navigate('/home');
        })
        .catch((error) => {
          setMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setMessage('Login successful!');
          navigate('/home');
        })
        .catch((error) => {
          setMessage(error.message);
        });
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md w-80">
        <h2 className="text-2xl font-bold mb-4">{isSignup ? 'Sign Up' : 'Login'}</h2>
        {message && <p className="mb-4 text-green-500">{message}</p>}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email:</label>
          <input 
            type="email" 
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
    </div>
  );
};

export default Auth;
