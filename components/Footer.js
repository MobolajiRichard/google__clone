import React from 'react'
import {Public} from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='bg-gray-100 grid  text-gray-500 divide-y-[1px] divide-gray-300'>
        <div className='px-8 py-3'>Nigeria</div>
        <div className='px-8 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense'>
            
            <div className='flex justify-center md:col-span-2 lg:col-start-2 lg:col-span-1'>
            <Public className='text-green-700'/>
            <p>Carbon neutral since 2007</p>
            </div>
            <div className='flex justify-center space-x-6 whitespace-nowrap md:justify-self-start'>
                <p>About</p>
                <p>Advertising</p>
                <p>Business</p>
                <p>How Search Works</p>
            </div>
            <div className='flex justify-center space-x-6 whitespace-nowrap md:ml-auto'>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Footer