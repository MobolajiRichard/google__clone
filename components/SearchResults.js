import React from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { useRouter } from 'next/dist/client/router'

function SearchResults({results}) {
    const router = useRouter()
    const startIndex = Number(router.query.start) || 0
    console.log({startIndex})
  return (
    <div className='w-full px-3 max-w-3xl sm:pl-[5%] md:pl-[14%] lg:pl-[42]'>
        <p className='text-sm text-gray-500 mt-3'> About ({results?.searchInformation?.formattedTotalResults}) results ({results?.searchInformation?.formattedSearchTime}) seconds </p>
    {results.items?.map((r)=>(
        <div key={r.cacheId} className='mb-4'>
            <a href={r.link} className='text-sm'>{r?.formattedUrl.substr(0,40)+'...'}</a>
            <a href={r.link} className='text-xl text-blue-800'><h2>{r?.title}</h2></a>
            <p>{r.snippet}</p>
        </div>
    ))}
    <div className='flex justify-around  m-4'>
        {startIndex > 0 && <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
            <div className='text-blue-800 hover:underline flex flex-col items-center cursor-pointer' >
                <ChevronLeft/>
                <p>Previous</p>
            </div>
        </Link>}
        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
            <div className='text-blue-800 hover:underline flex flex-col items-center cursor-pointer' >
                <ChevronRight/>
                <p>Next</p>
            </div>
        </Link>
    </div>
    </div>
  )
}

export default SearchResults