import React, {useState} from 'react';
import { VerticalMenu } from '../icons/VerticalMenu';
import NotesModal from './NotesModal';

const NotesItem = ({ note, color }) => {

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    console.log(openModal)

    return (
        <div className="flex flex-col gap-4 p-5 bg-white rounded-md shadow-md justify-between">
            <div className="flex justify-between">
                <div className="flex flex-row gap-3">
                    <div
                        className={`w-6 h-6 ${color} rounded-full border-dashed border-1 border-b-blue-950`}
                    ></div>
                    <h2 className="font-bold">{note.title}</h2>
                </div>
                <div className="position relative">
                    <button onClick={() => handleOpenModal()} className="option border bg-gray-100 p-[6px] rounded-[6px] hover:bg-blue-500 hover:text-white">
                        <VerticalMenu />
                    </button>
                    {openModal && <NotesModal />}
                    
                </div>
            </div>
            <p>{note.description}</p>
            <div className="flex justify-end">
                <span>{note.date}</span>
            </div>
        </div>
    );
};

export default NotesItem;
