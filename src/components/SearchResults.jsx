import React from 'react'

function SearchResults({ results }) {
  return (
    <div className='text-white md:pl-24'>
        <p className='text-gray-400 text-sm mb-5 mt-3'>About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds) </p>

        {results.items?.map((result) => {
            return(
                <div key={result.link} className='max-w-xl mb-8'>
                <div className='group'>
                    <a href={result.link} className='text-sm text-zinc-300'>
                        {result.formattedUrl}
                    </a>
                    <a href={result.link}>
                        <h2 className='truncate text-xl text-[#8AB4F8] group-hover:underline'>{result.title}</h2>
                    </a>
                </div>

                <p className='text-zinc-300'>{result.snippet}</p>
            </div>
            )
        })}

    </div>
  )
}

export default SearchResults