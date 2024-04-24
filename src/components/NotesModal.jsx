import React from 'react'
import { Eye } from '../icons/Eye'
import { Edit } from '../icons/Edit'
import { Delete } from '../icons/Delete'

const NotesModal = () => {
  return (
    <div className='bg-white absolute top-[40px] left-[-150px] py-2 shadow  flex flex-col rounded-md border *:'>
        <div className=' hover:bg-blue-400 hover:text-white cursor-pointer py-[6px] px-[12px] w-[180px] flex items-center gap-2 '><Eye/>  <span>Overview</span></div>
        <div className=' hover:bg-blue-400 hover:text-white cursor-pointer py-[6px] px-[12px] w-[180px] flex items-center gap-2 '><Edit/>  <span>Edit</span></div>
        <div className=' hover:bg-blue-400 hover:text-white cursor-pointer py-[6px] px-[12px] w-[180px] flex items-center gap-2 '><Delete/> <span>Delete</span></div>
    </div>
  )
}

export default NotesModal