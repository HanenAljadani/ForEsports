"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"
import { UserAuth } from "../context/authContext"

function Navbar() {


  const { user , logOut } = UserAuth();
  const [loading, setLoading] = useState(true);


   
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
   

    
   
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <a class="text-3xl font-bold font-heading" href="#">
            Esport<span className="text-purple-500">s</span> Bloggggggg
          </a>
          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a class="hover:text-gray-200" href="#">Homeee</a></li>
            <li><a class="hover:text-gray-200" href="#">Blog</a></li>
            <li><a class="hover:text-gray-200" href="#">Contact Us</a></li>
           {loading ? null : !user ? (
            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><Link class="hover:text-gray-200" href="#">Login</Link></li>
            <li><Link class="hover:text-gray-200" href="#">Signup</Link></li>
            </ul>
            ): (

              <li><button class="hover:text-gray-200" onClick={handleSignOut} >Signout</button></li>


            )


            }


          </ul>

          </div>

          </nav>
      
  )

}


export default Navbar;