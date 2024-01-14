
"use client";
import React , {useState} from "react";

import { UserAuth } from "../../context/authContext"

import { ToastContainer } from 'react-toastify';




function Page() {
 
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const {  googleSignIn , login } = UserAuth();
 
 
 
 const handleSignIn = async () => {
        try {
          await googleSignIn();

          
       //   window.location.href = "/home" 
          
        } catch (error) {
          console.log(error);
        }
        
     };

     const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await login(email,password);
        
      } catch (error) {
        console.log(error);
      }
      
   };
  return (

    <div class="Pt-20 grid place-items-center mx-2 my-20 sm:my-auto h-screen">
        <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">
    
            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                Login
            </h2>

            <form class="mt-10" onSubmit={handleLogin}>
                <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                <input id="email" 
                    value={email} 
                    onChange= {(e) => setEmail(e.target.value)}
                    type="email" name="email" placeholder="e-mail address" autocomplete="email"
                    class="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required />
                <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                <input id="password"
                   value={password} 
                   onChange= {(e) => setPassword(e.target.value)}
                   type="password" name="password" placeholder="password" autocomplete="current-password"
                    class="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required />
                <button 
                    class="w-full py-3 mt-10 bg-purple-500 rounded-lg 
                    font-medium text-white uppercase
                    border-2 border-purple-500
                    focus:outline-none hover:bg-transparent hover:shadow-none hover:text-purple-500">
                    Login
                </button>
                
            </form>
            <button onClick={handleSignIn} 
                    class="w-full py-3 mt-10 bg-orange-500  
                    font-medium text-white uppercase
                    border-2 rounded-lg border-orange-500 
                    focus:outline-none hover:bg-transparent hover:shadow-none hover:text-orange-500">
                    Login with Google 
                </button>
                <ToastContainer />
        </div>

    </div>



  )


}

export default Page;