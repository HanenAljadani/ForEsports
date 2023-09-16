import Link from "next/link"
function Navbar() {


  //const { user, googleSignIn, logOut } = UserAuth();
 
  return (
   

    
   
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <a class="text-3xl font-bold font-heading" href="/">
            Esport<span className="text-purple-500">s</span> Blog
          </a>
          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a class="hover:text-gray-200" href="/home">Home</a></li>
            <li><a class="hover:text-gray-200" href="/">Blog</a></li>
            <li><a class="hover:text-gray-200" href="/">Contact Us</a></li>
     
            <li><Link class="hover:text-gray-200" href="/Auth/login">Login</Link></li>
            <li><Link class="hover:text-gray-200" href="/Auth/signup">Signup</Link></li>



          </ul>

          </div>

          </nav>
      
  )

}


export default Navbar;