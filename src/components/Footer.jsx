import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-8 border z-10 border-t-[#3353F] border-l-transparent border-r-transparent text-white bg-[#111827]'>
      <div className='container p-12 flex justify-between flex-col md:flex-row items-center gap-4 md:gap-0'>
        <div className='text-white text-2xl md:text-3xl font-black cursor-pointer'>
          PORTFOLIO <span className='text-primary'>.</span>
        </div>
        <p className='text-gray-400 text-sm md:text-base'>
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer