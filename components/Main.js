import {Search, MicNone} from '@mui/icons-material'
import Image from 'next/image'
import {useRef} from 'react'
import { useRouter } from 'next/router'

const Main = () => {
  const inputRef = useRef()
  const router = useRouter()

  const search = (e) =>{
    e.preventDefault()
    const term = inputRef.current.value
    if(!term) return;

    router.push(`search?term=${term}`)
  }
  return (
    <form className='flex flex-col items-center justify-center w-full px-4'>
        <div>
        <Image src='/google_image.png' width={300} height={100}/>
        </div>
        <div className='border-2 border-gray-300 flex h-12 items-center rounded-full p-3 w-full hover:shadow-lg focus-within:shadow-lg max-w-2xl '>
            <Search/>
            <input ref={inputRef} className='flex-1 mx-2 outline-none cursor-pointer'/>
            <MicNone/>
        </div>
        <div className='flex justify-center mt-4 space-x-3 '>
            <button onClick={search} className='btn'>Google Search</button>
            <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
    </form>
  )
}

export default Main