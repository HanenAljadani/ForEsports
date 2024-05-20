"use client";

import { useEffect, useState } from "react";
import {
    collection,
    query,
    onSnapshot,
} from 'firebase/firestore';
import { db } from "../firebase";
import React from "react";

function Blog(){
  const [articles, setArticles] = useState([
  ]);
 // const [filter, setFilter] = useState('');
 // const [sortOrder, setSortOrder] = useState(''); // Added state for sorting order
  useEffect(() => {
      const q = query(collection(db, 'blog'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let blogsArr = [];
      
          querySnapshot.forEach((doc) => {
            blogsArr.push({ ...doc.data(), id: doc.id });
          });
          setArticles(blogsArr);
      });     
  }, []);
  return(
<>
<div className="min-h-screen  flex flex-col justify-center">
                <div className=" relative m-3 flex flex-wrap mx-auto justify-center ">
       
      {articles.map((item, id) => (
        <div key={id} >
     <div className=" relative m-3 flex flex-nowrap  ">
        <card className="bg-zinc-200 rounded-lg w-[20rem] md:w-[32rem] p-8  mx-auto  mt-11 ">
      <header class="flex font-light text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-90 -ml-2"  viewBox="0 0 24 24" stroke="#b91c1c">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
        </svg>
        <p>ESPORTS BLOG</p>
      </header>
   
      <h2 class="font-bold text-lg md:text-3xl mt-2">
       {item.title}
      </h2>
  
      <p class="mt-5"> 
        By: 
        <a href="#" class="text-purple-500"> {item.author} </a>
      </p>
  
      
  
      <h3 class="font-bold text-sm md:text-xl  mt-8"> Intro </h3>
      <p class="font-light text-justify"> {item.intro} </p>
  
      <button class="bg-purple-500 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group rounded-lg">
        <p> READ MORE </p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
  
      </card>
    </div>
    
     </div> 
  ))} 
  </div>
  </div>
    </>
  )
}

export default Blog;