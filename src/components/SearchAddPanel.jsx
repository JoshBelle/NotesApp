import React from 'react'

const SearchAddPanel = () => {
  return (
    <div className='flex gap-[12px]'>
        <input className='px-4 py-2 border border-1 border-blue-500 rounded-lg' placeholder='Search for...'/>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg'>Add New</button>
    </div>
  )
}

export default SearchAddPanel