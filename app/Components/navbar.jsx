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
      <nav className="flex justify-between  w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <a className="text-xl md:text-3xl font-bold font-heading text-gray-900" href="#">
            For<span className="text-purple-500">E</span>sports
          </a>
          <ul className="text-gray-900 flex  md:flex-inline font-light space-x-2 pl-4 text-[8px] md:text-base md:flex md:px-4 mx-auto md:font-semibold md:font-heading md:space-x-12 ">
            <li><a className="hover:text-purple-500" href="/">Home</a></li>
            <li><a className="hover:text-purple-500" href="/blog">Blog</a></li>
            <li><a className="hover:text-purple-500" href="#">Tournament</a></li>
            <li><a className="hover:text-purple-500" href="#">Community</a></li>
           {   loading ? null :!user ? (
            <ul className=" flex  md:flex-inline font-light space-x-2 pl-4 text-[8px] md:text-base md:flex md:px-4 mx-auto md:font-semibold md:font-heading md:space-x-12">
              
            <li><Link className="hover:text-purple-500" href="/Auth/login">Login</Link></li>
            <li><Link className="hover:text-purple-500" href="/Auth/signup">Signup</Link></li>
            </ul>
            ): (

              <li><a className="hover:text-purple-500 cursor-pointer" onClick={handleSignOut} >Signout</a></li>
               

            ) }


          </ul>

          </div>

          </nav>
      
  )

}


export default Navbar;