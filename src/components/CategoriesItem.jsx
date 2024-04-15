import React from 'react'

const CategoriesItem = ({item}) => {
  return (
    <div>
        <button className='px-4 py-2 border border-1 border-blue-500 rounded-lg'>{item}</button>
    </div>
  )
}

export default CategoriesItem