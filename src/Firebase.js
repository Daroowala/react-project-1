import { initializeApp } from 'firebase/app'; 
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCx_N8-2uKtpI4vXsMZdoEq0VLRnIoawAU",
    authDomain: "react-project-1-65bb4.firebaseapp.com",
    projectId: "react-project-1-65bb4",
    storageBucket: "react-project-1-65bb4.firebasestorage.app",
    messagingSenderId: "700987822228",
    appId: "1:700987822228:web:4dd5a0513cd7bd55e76481",
    measurementId: "G-QJ99EP3VS8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export { auth };