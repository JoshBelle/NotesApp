import React, {useEffect, useRef, useState} from 'react';
import { VerticalMenu } from '../icons/VerticalMenu';
import NotesModal from './NotesModal';


const NotesItem = ({ note, color }) => {


    const [isOpen, setIsOpen] = useState(false);

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    const handlerOpenModals = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col gap-4 p-5 bg-white rounded-md shadow-md justify-between">
            <div className="flex justify-between">
                <div className="flex flex-row gap-3">
                    <div
                        className={`w-6 h-6 ${color} rounded-full border-dashed border-1 border-b-blue-950`}
                    ></div>
                    <h2 className="font-bold">{note.title}</h2>
                </div>
                <div className="position relative" ref={modalRef}>
                    <button onClick={handlerOpenModals} className="option border bg-gray-100 p-[6px] rounded-[6px] hover:bg-blue-500 hover:text-white">
                        <VerticalMenu />
                    </button>
                    {isOpen && <NotesModal note={note.id}/>}
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
