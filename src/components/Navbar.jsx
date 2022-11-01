import React from 'react'
import {TbGridDots} from "react-icons/tb"

function Navbar() {
  return (
    <nav className='flex items-center justify-between text-xs md:text-base'>
        <div className="gap-5 text-[#BDC1C6] flex">
          <a href="#">About</a>
          <a href="#">Store</a>
        </div>
        <div className="flex gap-5 items-center justify-between text-white">
          <a href="#">Gmail</a>
          <a href="#">Images</a>

          <TbGridDots className='text-xs cursor-pointer md:text-2xl'/>
          <div className='w-5 h-5 rounded-full bg-green-800 text-white flex items-center text-xs justify-center cursor-pointer md:w-9 md:h-9 md:text-base'>G</div>
        </div>
      </nav>
  )
}

export default Navbar