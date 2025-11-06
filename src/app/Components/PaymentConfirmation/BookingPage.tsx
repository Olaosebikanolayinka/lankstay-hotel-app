"use client";
import React from 'react'
import { useState } from 'react';
import Button from '../Button';

const BookingPage = () => {
        const [days, setDays] = useState(2);
        const pricePerDay = 200;
        const total = days * pricePerDay;
    

  return (

    <div>
        <nav className='items-center flex justify-center border-b-2 border-gray-200 shadow-sm h-20 '>
            <h3 className='text-[#3252DF] text-2xl'>Lanka<span className='text-[#152C5B]'>Stay.</span></h3>
        </nav>

        <div className='flex flex-col justify-center items-center mt-15'>
            <div className='flex flex-row mb-6 gap-4 items-center'>
             <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full">✔</div>
        <div className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-500 rounded-full">2</div>
        <div className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-400 rounded-full">3</div>
            </div>

        <div className='flex flex-col items-center '>
            <h2 className='text-3xl font-bold mb-4 text-[#152C5B]'>Booking Information</h2>
            <p className='text-[#B0B0B0] text-sm mb-6'>Please fill up the blank fields below</p>
        </div>
        </div>

    <div className=' flex gap-8 justify-center items-center '>
        <div className='flex flex-row justify-center gap-8 items-center mb-4 '>
            <div className='flex flex-col pt-10 gap-6'>
                <img src="/booking-image.png" alt="building" className='w-[420px] h-[270px]'/>
              <div className='flex flex-row gap-8 justify-between items-center'>
                <p className='text-[#152C5B]'>Blue Origin Fams</p>
                <p className='text-[#B0B0B0] '>Galle, Sri Lanka</p>
              </div>
            </div>

            <div className="hidden md:block h-70 w-px bg-gray-300"></div>


        <div className="flex flex-col md:w-1/2 text-left space-y-5 pl-10">
          <div className='flex gap-6 flex-col w-[324px]'>
            <p className="text-[#152C5B] text-sm mb-1">How long will you stay?</p>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setDays(Math.max(1, days - 1))}
                className="bg-red-500 text-white w-8 h-8 rounded"
              >
                -
              </button>
              <span className=" text-[#152C5B] text-sm">{days} Days</span>
              <button
                onClick={() => setDays(days + 1)}
                className="bg-green-500 text-white w-8 h-8 rounded"
              >
                +
              </button>
            </div>

            <div className=' items-center justify-center'>
            <p className="text-gray-500 text-sm mb-1">Pick a Date</p>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <span className="text-[#152C5B] text-sm">📅 20 Jan – 22 Jan</span>
            </div>
          </div>

          <div className=' items-center justify-center'>
            <p className="text-gray-400 text-sm">
              You will pay <span className="font-bold text-gray-800">${total} USD</span> per{" "}
              <span className="font-bold text-blue-600">{days} Days</span>
            </p>
          </div>
          </div>

        </div>

    </div>

          
      </div>
       <div className="mt-10 flex flex-col items-center space-y-4">
        <Button title='Book Now' type='submit' />
       <button className='bg-[#F5F6F8] text-[#B3B3B3] font-medium px-5 py-1 rounded-md hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out flex items-center gap-2'>Cancel</button>
      </div>
      </div>
          
  )
}

export default BookingPage