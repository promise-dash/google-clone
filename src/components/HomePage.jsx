import React, { useState } from 'react'
import Navbar from './Navbar'
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillMicFill} from "react-icons/bs"
import {AiFillCamera} from "react-icons/ai"
import logo from "../utils/google logo.png";
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate(`/search/${searchTerm}`);
  }
  return (
    <div className='h-[93.3vh]'>
      <Navbar />

      <img src={logo} alt="logo" className='mt-10 w-1/4 m-auto lg:w-1/4'/>

      <form action="" onChange={((e) => setSearchTerm(e.target.value))} onSubmit={handleSubmit} className='mt-7 flex w-6/7 items-center m-auto py-3 px-5 rounded-full text-white border border-white md:w-2/3 lg:w-1/2'>
        <div className='flex gap-3 w-full items-center'>
          <AiOutlineSearch />
          <input type="text" className='bg-transparent outline-none border-none w-5/6'/>
        </div>
        <div className='flex gap-3'>
          <BsFillMicFill />
          <AiFillCamera />
        </div>
      </form>

      <div className='flex flex-col items-center justify-center gap-3 mt-8 md:flex-row'>
        <div className='p-2 px-3 bg-[#303134] text-white rounded-md cursor-pointer'>Google Search</div>
        <div className='p-2 px-3 bg-[#303134] text-white rounded-md cursor-pointer'>I'm Feeling Lucky</div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default HomePage