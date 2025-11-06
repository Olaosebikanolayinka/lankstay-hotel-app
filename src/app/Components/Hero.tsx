import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
  <div className='flex flex-col lg:flex-row justify-center items-start gap-10 mt-5 mb-20 w-full px-4 sm:px-6 lg:px-20 pt-10'>
    <div className='flex flex-col justify-center items-start lg:items-start lg:w-1/2 px-4 sm:px-6 gap-6 sm:items-center sm:text-center sm:pt-4'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='lg:text-5xl font-extrabold leading-[1.5] text-[#152C5B] sm:text-4xl '>Forget Busy Work,
                    Start Next Vacation
                    </h1>
         </div>
                    <div className='text-left  sm:text-center items-center justify-center'>
                        <p className=' text-left text-sm leading-[1.5] text-[#B0B0B0]'>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
                    </div>
                    

      <div className='pt-5'>
        <Button type='submit' title='Show more' />
    </div>

  <div className='flex flex-row justify-start items-center gap-6 pt-5 w-full lg:pt-0 lg:gap-12 lg:items-end px-4 sm:px-6'>
        <div className='flex flex-col justify-center items-left'>
          <img src="/icons/traveler.svg" alt="traveler icon" className='w-6 h-8 mb-3' />
          <p className='text-gray-600 text-sm'><span className='font-bold text-[#152C5B] py-1'>2500</span> users</p>
        </div>
        <div className='flex flex-col justify-center items-left'>
          <img src="/icons/cameraicon.svg" alt="Camera icon" className='w-6 h-8 mb-3' />
         <p className='text-gray-600 text-sm'><span className='font-bold text-[#152C5B] py-1'>200</span> treasures</p>
        </div>
        <div className='flex flex-col justify-center items-left'>
          <img src="/icons/locationicon.svg" alt="Location icons" className='w-6 h-8 mb-3'/>
          <p className='text-gray-600 text-sm'><span className='font-bold text-[#152C5B] py-1'>100</span> cities</p>
        </div>
      </div>
        </div>
  <div className='px-4 sm:px-6 relative lg:pr-10 pt-6 border-2 border-gray-900 rounded-3xl rounded-tl-[76px] w-full lg:w-1/2'>
      <div className="absolute top-4 left-4  bg-black rounded-2xl shadow-md"></div>
  <img className='rounded-tl-[76px] rounded-2xl relative w-full h-auto object-cover' src="/hero-image.png" alt="Hero-image banner" />  
</div>


    </div>
  )
}

export default Hero