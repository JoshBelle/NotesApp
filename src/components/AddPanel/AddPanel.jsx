import React, { useState } from 'react';
import style from './AddPanel.module.css';
import { Close } from '../../icons/Close';
import { ShevronLeft } from '../../icons/ShevronLeft';
import { useDispatch } from 'react-redux';
import { setOpen } from '../../redux/modalAddSlice';
import { useAddNotesMutation } from '../../redux/apiSlice';
import { v4 } from 'uuid';

const AddPanel = () => {
    const [newNote, addNewNote] = useState({
        title:'',
        description:'',
        date:'',
        category:'',
        id: v4()
    })
    const [addNote,{isLoading, isError}] = useAddNotesMutation()

    
    const handleChange = (e) => {
        const { name, value } = e.target
        addNewNote(data => ({
            ...data,
            [name]: value
        }))
    }
    console.log(newNote)

    const handleSubmit = async() => {
        await addNote(newNote).unwrap()
        addNewNote({
            title:'',
            description:'',
            date:'',
            category:'',
            id: v4()
        })
    }

    const dispatch = useDispatch();
    const handleOpen = () => {
        dispatch(setOpen(false));
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="absolute w-full h-full bg-black opacity-75"></div>
            <div className="relative  bg-white w-[1000px] m-auto rounded-lg shadow-md">
                <div className="flex justify-between py-5 px-5 border-b border-gray-300">
                    <h2> Add Note </h2>
                    <Close />
                </div>
                <div className="py-5 px-5">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <label>Create Date</label>
                            <input
                                value={newNote.date}
                                className="border rounded-lg border-gray-300 py-2 px-4 w-[300px]"
                                type="date"
                                name="date"
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className=" flex flex-col gap-2">
                            <label>Note title</label>
                            <input
                                value={newNote.title}
                                name="title"
                                onChange={handleChange}
                                className="border rounded-lg border-gray-300 py-2 px-4 w-[300px]"
                                placeholder="Title"
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Category</label>
                            <div className="flex relative">
                                <select
                                    value={newNote.category}
                                    onChange={handleChange}
                                    name='category'
                                    className={`${style.arrow} w-[300px] border rounded-lg border-gray-300 py-2 px-4 w-[300px]' id="select" name="select"`}
                                >
                                    <option value="All">All</option>
                                    <option value="Business">Business</option>
                                    <option value="Social">Social</option>
                                    <option value="Home">Home</option>
                                    <option value="Personal">Personal</option>
                                </select>
                                <ShevronLeft />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 px-5 flex flex-col gap-2">
                    <label> Description </label>
                    <textarea
                        onChange={handleChange}
                        value={newNote.description}
                        name="description"
                        class="w-full h-[450px] px-3 py-2 border-gray-300 border rounded-lg resize-none"
                        placeholder="Введите ваш текст здесь..."
                    ></textarea>
                </div>
                <div className="flex justify-end gap-4 px-5 pb-6">
                    <button
                        onClick={() => handleOpen()}
                        className="color-red px-3 py-2 border  text-rose-500 border-red-300 rounded-md"
                    >
                        Cancel
                    </button>
                    <button onClick={() => handleSubmit()} className="bg-blue-600 px-3 py-2  text-white rounded-md">
                        Add Note
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddPanel;
