import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dys-admins-login-auth.firebaseapp.com",
  projectId: "dys-admins-login-auth",
  storageBucket: "dys-admins-login-auth.appspot.com",
  messagingSenderId: "664122128323",
  appId: "1:664122128323:web:44c2655a708189e2f52f76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// console.log(typeof(auth))
