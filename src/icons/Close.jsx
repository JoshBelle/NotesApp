import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/modalAddSlice';


export const Close = () => {

    const dispatch = useDispatch()

    const handleOpen = () => {
        dispatch(setOpen(false))
    }


    return (
        <div >
            <svg
                onClick={() => handleOpen()}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                />
            </svg>
        </div>
    );
};
