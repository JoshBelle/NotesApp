import React from 'react'
import NotesItem from './NotesItem'


const NotesGrid = () => {
  return (
    <div className='w-1200 bg-slate-100 mx-auto grid grid-cols-4 gap-4 p-10'>
        <NotesItem></NotesItem>
        <NotesItem></NotesItem>
        <NotesItem></NotesItem>
        <NotesItem></NotesItem>
        <NotesItem></NotesItem>
    </div>

  )
}

export default NotesGrid