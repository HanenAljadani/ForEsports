import React from 'react'
import { ToastContainer, toast } from "react-toastify";
export default function New_tournament() {
  return (
    <div className="min-h-screen  "> <>
    <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar
    />
    <div class='flex items-center justify-center p-12  h-screen'>
      
            <div class='mx-auto w-full max-w-[550px]'>
                <h2 className='relative flex  items-center justify-center text-purple-500 font-bold text-xl md:text-3xl pb-8'>
                    Add Your Tournament!
                </h2>
                <h2 className='text-gray-500 text-lg md:text-xl pb-4 '>
                Please fill out the form below to add your tournament, ensuring that the data is correct.
                </h2>
                <form>
                    <div class='-mx-3 flex flex-wrap pt-8'>
                        <div class='w-full px-3 sm:w-1/2'>
                            <div class='mb-5'>
                                <label
                                    for='Name'
                                    class='mb-3 block text-base font-medium text-[#07074D]'
                                >
                                    Tournament&apos;s Name
                                </label>
                                <input
                                    type='text'
                                    name='Name'
                                    id='Name'
                                    placeholder='Name'
                                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                                    
                                />
                            </div>
                        </div>
                        <div class='w-full px-3 sm:w-1/2'>
                            <div class='mb-5'>
                                <label
                                    for='Game'
                                    class='mb-3 block text-base font-medium text-[#07074D]'
                                >
                                    Tournament&apos;s Game
                                </label>
                                <input
                                    type='text'
                                    name='Game'
                                    id='Game'
                                    placeholder='Game'
                                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                                    
                                />
                            </div>
                        </div>
                        <div class='w-full px-3 sm:w-1/2'>
                            <div class='mb-5'>
                                <label
                                    for='price'
                                    class='mb-3 block text-base font-medium text-[#07074D]'
                                >
                                    Tournament&apos;s Prize
                                </label>
                                <input
                                    type='number'
                                    name='Prize'
                                    id='Prize'
                                    placeholder='0'
                                    min='0'
                                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                                    
                                />
                            </div>
                        </div>
                        <div class='w-full px-3 sm:w-1/2 '>
                            <div class='mb-5'>
                                <label
                                    for='date'
                                    class='mb-3 block text-base font-medium text-[#07074D]'
                                >
                                     Tournament&apos;s Time (need datepicker)
                                </label>
                                <input
                                    type='number'
                                    name='date'
                                    id='date'
                                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                                    
                                />
                            </div>
                        </div>
                        <div class='w-full px-3 sm:w-1/2 '>
                            <div class='mb-5'>
                                <label
                                    for='location'
                                    class='mb-3 block text-base font-medium text-[#07074D]'
                                >
                                     Tournament&apos;s Location
                                </label>
                                <input
                                    type='text'
                                    name='location'
                                    id='location'
                                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div class='mb-5'>
                        <label
                            for='guest'
                            class='mb-3 block text-base font-medium text-[#07074D]'
                        >
                            Description
                        </label>
                        <textarea
                            type='text'
                            name='description'
                            id='description'
                            placeholder='Write your description about the tournament.... '
                            class='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                            
                        ></textarea>
                    </div>


                    <div>
                        <button
                            type='submit'
                            class='hover:shadow-form border-2 border-purple-400 text-purple-400 rounded-xl hover:bg-purple-500 py-3 px-8 text-center text-base font-semibold hover:text-white outline-none'
                        >
                            Submit
                        </button>
                    </div>
                </form>
          {/**    {error && <span className='error-msg'>{error}</span>}*/}   
            </div>
       
         {/**      // You can customize the message or redirect to the login page
           <p>Loading...</p>*/}
      
    </div>
</> </div>
  )
}
