import React from 'react'
import Button from '../Components/Button'

const BookingPage2 = () => {
  return (
    <div>
        <nav className='items-center flex justify-center border-b-2 border-gray-200 shadow-sm h-20 '>
            <h3 className='text-[#3252DF] text-2xl'>Lanka<span className='text-[#152C5B]'>Stay.</span></h3>
        </nav>

        <div className='flex flex-col justify-center items-center mt-15'>
            <div className='flex flex-row mb-6 gap-4 items-center'>
            <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full">✔</div>
            <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full">✔</div>
            <div className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-400 rounded-full">3</div>
            </div>

        <div className='flex flex-col items-center '>
            <h2 className='text-3xl font-bold mb-4 text-[#152C5B]'>Payment</h2>
            <p className='text-[#B0B0B0] text-sm mb-6'>Kindly follow the instructions below</p>
        </div>
        </div>


    <div className='flex flex-row gap-8 justify-center items-center mt-10'>
        <div className='flex flex-col gap-8 text-[#152C5B]'>
            <div>
                <p>
                Transfer LankaStay:
                </p>
                </div>

                 <div>
                <p>
                2 Days at Blue Origin Fams,Galle, Sri Lanka
                </p>
                </div>

                 <div>
                <p>
                Total: $400 USD
                </p>
                </div>

                 <div>
                <p>
                Initial Payment: $200
                </p>
                </div>

                 <div>
                <p>
                Transfer LankaStay:
                </p>
                </div>

        </div>

        <div className="hidden md:block h-70 w-px bg-gray-300 mr-10"></div>

        <div className='flex flex-col justify-center items-center gap-6 text-sm text-[#152C5B]'>

            <div className='flex flex-col gap-2'>
                <label htmlFor="card-number" className='text-[#152C5B]'>Card Number</label>
                <input id="card-number" type="text" inputMode="numeric" pattern="[0-9]*" placeholder='card number'  className="border border-gray-300 rounded px-3 py-2 text-sm" required />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="Bank" className='text-[#152C5B]'>Bank</label>
                <input id="Bank" type="text"  placeholder='select bank' className="border border-gray-300 rounded px-3 py-2 text-sm" required/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="exp-date" className='text-[#152C5B]'>Exp Date</label>
                <input id="exp-date" type="text" inputMode="numeric" placeholder='validation date'  className="border border-gray-300 rounded px-3 py-2 text-sm" required/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="CVV" className='text-[#152C5B]'>CVV</label>
                <input id="CVV" type="text" inputMode="numeric" maxLength={4} placeholder='cvv' className="border border-gray-300 rounded px-3 py-2 text-sm" required/>
            </div>

        </div>

        </div>
       <div className="mt-10 flex flex-col items-center space-y-4">
        <Button title='Pay Now' type='submit' />
       <button className='bg-[#F5F6F8] text-[#B3B3B3] font-medium px-5 py-1 rounded-md hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out flex items-center gap-2'>Cancel</button>
      </div>
      </div>
        
    
  )
}

export default BookingPage2