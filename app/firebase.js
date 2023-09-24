// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIWvMuk8xegzj68vSA5g2aBPEJARdPjWo",
  authDomain: "blog-f343d.firebaseapp.com",
  projectId: "blog-f343d",
  storageBucket: "blog-f343d.appspot.com",
  messagingSenderId: "663180660360",
  appId: "1:663180660360:web:909df6df4d378e8d3ad93d",
  measurementId: "G-L6HYCHMJD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);