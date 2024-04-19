import React from 'react';
import style from './AddPanel.module.css'
import { Close } from '../../icons/Close';
import { ShevronLeft } from '../../icons/ShevronLeft';


const AddPanel = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-between py-5 px-5 border-b border-gray-400">
                <h2> Add Note </h2>
                <Close/>
            </div>
            <div className='py-5 px-5'>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <label>Create Date</label>
                        <input className="border rounded-lg border-gray-400 py-2 px-4 w-[200px]" type="date" name="date"></input>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <label>Note title</label>
                        <input className="border rounded-lg border-gray-400 py-2 px-4 w-[200px]" placeholder="Title"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Category</label>
                        <div className='flex'>
                            <select  className={`${style.arrow} border rounded-lg border-gray-400 py-2 px-4 w-[200px]' id="select" name="select"`}>
                                <option value="All">All</option>
                                <option value="Business">Business</option>
                                <option value="Social">Social</option>
                                <option value="Home">Home</option>
                                <option value="Personal">Personal</option>
                            </select> 
                            <ShevronLeft className="absolute"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPanel;
