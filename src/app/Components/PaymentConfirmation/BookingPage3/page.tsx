import React from 'react'
import Link from 'next/link'

const BookingPage3 = () => {
  return (
    <div>

        <div className='flex flex-col justify-center items-center mt-15'>
            <div className='flex flex-row mb-6 gap-4 items-center'>
             <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full">✔</div>
            <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full">✔</div>
            <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full">✔</div>
            </div>

        <div className='flex flex-col items-center '>
            <h2 className='text-3xl font-bold mb-4 text-[#152C5B]'>Yay! Payment Completed</h2>
        </div>
        </div>

        <div className='flex flex-col gap-3 justify-center items-center mt-10 mb-5'>
            <div className='mb-10'>
                <img src="/icons/booking3-icon.svg" alt="Human" className="w-80 h-64 sm:w-96 sm:h-72" />
            </div>
            <div className='text-[#3252DF] items-center text-center text-sm'>
                <p>Please check your email & phone Message. </p>
                <p>We have sent all the Information</p>
            </div>
            <Link href="/" className="text-sm hover:text-[#152C5B] mt-5 text-gray-400">
                Go to Dashboard
            </Link>
        </div>
    </div>
  )
}

export default BookingPage3