import React from 'react'
import CategoriesItem from './CategoriesItem'

const Categories = () => {
  return (
    <div className='flex gap-[12px]'>
        <CategoriesItem/>
        <CategoriesItem/>
        <CategoriesItem/>
        <CategoriesItem/>
    </div>
  )
}

export default Categories