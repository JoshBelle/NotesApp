import React from 'react'


const NotesItem = ({note}) => {
    console.log(note)
  return (
    <div className="flex flex-col gap-4 p-5 bg-white rounded-md shadow-md justify-between">
        <div className='flex justify-between'>
            <div className="flex flex-row gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full border-dashed border-1 border-b-blue-950"></div>
                <h2 className='font-bold'>{note.title}</h2>
            </div>
            <div>
                <button className='option'>More</button>
            </div>
        </div>
        <p>{note.description}</p>
        <div className="flex justify-end">
            <span>{note.date}</span>
        </div>
    </div>
  )
}

export default NotesItem