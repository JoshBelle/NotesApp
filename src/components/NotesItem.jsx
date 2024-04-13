import React from 'react'


const NotesItem = () => {
  return (
    <div className="flex flex-col gap-4 p-5 bg-white rounded-md shadow-md ">
        <div className='flex justify-between'>
            <div className="flex flex-row gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full border-dashed border-1 border-b-blue-950"></div>
                <h2 className='font-bold'>Title</h2>
            </div>
            <div>
                <button className='option'>More</button>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et laudantium labore nam fugiat magnam voluptatum accusamus magni vel repellendus ipsum unde dolor, animi accusantium minus rerum corrupti. Veniam, harum.</p>
        <div className="flex justify-end">
            <span>Data</span>
        </div>
    </div>
  )
}

export default NotesItem