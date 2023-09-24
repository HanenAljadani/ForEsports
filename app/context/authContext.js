
"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    window.location.href = "/home"
  };

  const logOut = () => {
    signOut(auth);
  };
  

  const signup = async (email, password) => {

    try {
      const user2 = createUserWithEmailAndPassword(auth,email,password);
      const user1 =user2.user;
      setUser(user1);
      window.location.href = "/home"

      
  
    } catch (error) {
        alert(error.message);
      }
    

  };
  const login = async (email ,password) =>{

   try{
   const user2 =  await signInWithEmailAndPassword(auth,email,password);
   const user1 =user2.user;
   setUser(user1);
   window.location.href = "/home"
   }catch(error){
    alert(error);
   } 
  
    }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut ,signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};