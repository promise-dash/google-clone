import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/FetchFromAPI';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"

function SearchPage() {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchFromAPI(`q=${searchTerm}&start=${startIndex}`)
    .then((data) => setResults(data));

  }, [searchTerm, startIndex]);

  const handleNext = () => {
    setStartIndex(startIndex+10);
  }
  const handlePrev = () => {
    startIndex>=10 && setStartIndex(startIndex-10);
  }

  return (
    <div className='relative'>
      <div className='top-0 pt-3 sticky bg-[#202124]'>
        <SearchBar searchTerm={searchTerm}/>
        <hr className='border-gray-500 mt-3'/>
      </div>
      <SearchResults results={results}/>

      <div className='mt-14 flex max-w-xl items-centr justify-evenly text-[#8AB4F8] md:pl-24'>
        <button className='flex gap-2 items-center justify-center disabled:hidden' onClick={handlePrev} disabled={startIndex===0}>
          <span><AiOutlineArrowLeft /></span> 
          <span>Previous</span>
        </button>
        <button className='flex gap-2 items-center justify-center disabled:hidden' onClick={handleNext} disabled={startIndex === results.length}>
          <span>Next</span> 
          <span><AiOutlineArrowRight /></span>
        </button>
      </div>
    </div>
  )
}

export default SearchPage