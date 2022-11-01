import React, { useState } from 'react'
import logo from "../utils/google logo.png";
import {MdClose} from "react-icons/md"
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillMicFill} from "react-icons/bs"
import {AiFillCamera} from "react-icons/ai"
import { TbGridDots } from 'react-icons/tb';
import {IoMdSettings} from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { options } from '../utils/Menu';


function SearchBar({searchTerm}) {
    const [item, setItem] = useState(searchTerm);
    const navigate = useNavigate();

    const searchItem = (e) => {
        e.preventDefault();

        navigate(`/search/${item}`);
    }

  return (
    <div className='md:pl-24'>
    <nav className='flex items-center justify-between'>
        <div className='flex items-center gap-5 w-full md:gap-10'>
            <Link to="/">
                <img src={logo} alt="logo" className='w-13 h-5 md:w-15 md:h-7' />
            </Link>

            <form action="" onSubmit={searchItem} className='flex w-full items-center py-3 px-5 rounded-full text-white bg-[#303134] hover:shadow-lg md:w-2/3 lg:w-1/2'>
                <div className='flex gap-3 w-full items-center'>
                <AiOutlineSearch />
                <input type="text" value={item} onChange={((e) => setItem(e.target.value))} className='bg-transparent outline-none border-none w-5/6'/>
                </div>
                <div className='flex gap-3'>
                <MdClose onClick={(() => setItem(""))} className='cursor-pointer text-gray-400 text-xl'/>
                <div className='h-5 w-px bg-gray-400'></div>
                <BsFillMicFill />
                <AiFillCamera className='hidden md:flex'/>
                </div>
            </form>
        </div>

      <div className="gap-5 items-center justify-between text-white hidden md:flex">
        <IoMdSettings className='text-xs md:text-2xl cursor-pointer'/>
        <TbGridDots className='text-xs md:text-2xl cursor-pointer'/>
        <div className='w-5 h-5 rounded-full bg-green-800 text-white flex items-center text-xs justify-center cursor-pointer md:w-9 md:h-9 md:text-base'>G</div>
      </div>

      </nav>
        
        <div className='mt-8 flex items-center gap-4 md:gap-7'>
            {options.map((option) => {
                return (
                    <div key={option.name} className={`flex gap-1 text-xs text-gray-400 items-center justify-center cursor-pointer hover:text-[#8AB4F8] md:text-sm ${option.name==='All' ? 'text-[#8AB4F8]' : ''}`}>
                        <span className='hidden sm:flex'>{option.icon}</span>
                        <span >{option.name}</span>
                    </div>
                )
            })}       

        </div>
    </div>
  )
}

export default SearchBar