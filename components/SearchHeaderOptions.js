import React from 'react'
import {MoreVertOutlined, ArticleOutlined,ImageOutlined, Search, LocationOnOutlined } from '@mui/icons-material'


function SearchHeaderOptions() {
  return (
    <div className='flex h-10 w-full items-center justify-evenly mt-6 lg:pl-40 lg:justify-start  lg:space-x-40'>
<div className='flex'>
        <div className='options'>
            <Search className='icons'/>
            <p >All</p>
        </div>
        <div className='options'>
            <ImageOutlined className='icons'/>
            <p>Image</p>
        </div>
        <div className='options'>
            <ArticleOutlined className='icons'/>
            <p>News</p>
        </div>
        <div className='options'>
            <LocationOnOutlined className='icons'/>
            <p>Maps</p>
        </div>
        <div className='options'>
            <MoreVertOutlined className='icons'/>
            <p>More</p>
        </div>
    </div>
        <p className='options'>Tools</p>
    </div>
  )
}

export default SearchHeaderOptions