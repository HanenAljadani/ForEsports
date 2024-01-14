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
      <nav className="flex justify-between bg-gray-900 text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <a className="text-xl md:text-3xl font-bold font-heading" href="#">
            For<span className="text-purple-500">E</span>sports
          </a>
          <ul className=" flex  md:flex-inline font-light space-x-2 pl-4 text-[8px] md:text-base md:flex md:px-4 mx-auto md:font-semibold md:font-heading md:space-x-12 ">
            <li><a className="hover:text-gray-200" href="/home">Home</a></li>
            <li><a className="hover:text-gray-200" href="/blog">Blog</a></li>
            <li><a className="hover:text-gray-200" href="#">Tournament</a></li>
            <li><a className="hover:text-gray-200" href="#">Community</a></li>
           {   loading ? null :!user ? (
            <ul className=" flex  md:flex-inline font-light space-x-2 pl-4 text-[8px] md:text-base md:flex md:px-4 mx-auto md:font-semibold md:font-heading md:space-x-12">
              
            <li><Link className="hover:text-gray-200" href="/Auth/login">Login</Link></li>
            <li><Link className="hover:text-gray-200" href="/Auth/signup">Signup</Link></li>
            </ul>
            ): (

              <li><a className="hover:text-gray-200 cursor-pointer" onClick={handleSignOut} >Signout</a></li>
               

            ) }


          </ul>

          </div>

          </nav>
      
  )

}


export default Navbar;