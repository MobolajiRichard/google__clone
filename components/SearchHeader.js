import { Close, Search, Mic, SettingsOutlined, AppsRounded } from '@mui/icons-material'
import Image from 'next/image'
import {useRef} from 'react'
import { Avatar } from "@mui/material"
import SearchHeaderOptions from './SearchHeaderOptions'
import { useRouter } from 'next/dist/client/router'


function SearchHeader() {
    const inputRef = useRef()
    const router = useRouter()
    const search = (e) =>{
      e.preventDefault()
      const term = inputRef.current.value
      if(!term) return;
  
      router.push(`search?term=${term}`)
    }
  return (
    <header className='px-6 pt-6 border-b'>
        <div className='flex justify-between items-center'>      
        <Image src='/google_image.png' width={100} height={30}/>
            <div className=' flex-grow flex'>
            <form onSubmit={search} className='border-2 border-gray-200 flex h-12 items-center ml-10 rounded-full p-3 w-full hover:shadow-lg focus-within:shadow-lg max-w-2xl' >
                <input ref={inputRef} defaultValue={router.query.term} className='w-full outline-none flex-grow indent-2' />
                <Close className='hover:scale-125 text-gray-500 sm:mr-3'/>
                <div className='hidden sm:inline-flex border-l-2 border-gray-300 h-6'></div>
                <Mic className='mr-3 h-6 text-blue-500 hidden sm:inline-flex ml-3'/>
                <Search className='text-blue-500' onClick={search}/>
                <button hidden></button>
            </form>
            </div>
            <div className='flex justify-between items-center ml-5'>
                <SettingsOutlined />
                <AppsRounded className='ml-4' />
                <Avatar className='h-8 w-8 ml-4'/>
            </div>
        </div>
        <SearchHeaderOptions/>
    </header>
  )
}

export default SearchHeader