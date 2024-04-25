import React, { useState } from 'react';
import { useDeleteNoteMutation } from '../redux/apiSlice';

const WarningDelete = ({ note }) => {
    const [hidden, setHidden] = useState(false);

    const handlerHidden = () => {
        setHidden(!hidden);
    };

    const [deleteNote, { isLoading, isError, isSuccess }] =
        useDeleteNoteMutation();



    const handleDelete = () => {
        deleteNote(note);
    };

    return (
        <div
            className={
                hidden
                    ? `hidden`
                    : `fixed top-0 left-0 z-30 w-[100vw] h-[100vh] flex justify-center items-center`
            }
        >
            <div
                onClick={() => handlerHidden()}
                className="bg-black top-0 left-0 w-[100%] h-[100%] opacity-35"
            ></div>
            <div className="rounded-[20px] absolute flex flex-col text-center justify-center gap-4 items-center bg-white w-[480px] m-auto p-[64px]">
                <div>
                    <img
                        className="w-[48px]"
                        src="https://cdn-icons-png.flaticon.com/128/14978/14978684.png"
                        alt="delete-img"
                    />
                </div>
                <h2 className="text-2xl">Are you sure?</h2>
                <p>Are you certain you want to delete this record?</p>
                <div className="flex gap-2">
                    <button
                        onClick={() => handlerHidden()}
                        className="px-[18px] py-[6px] rounded-md hover:bg-gray-300  "
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => handleDelete()}
                        className="px-[18px] py-[6px] rounded-md hover:bg-red-600 bg-red-500 text-white border"
                    >
                        Yes, delete it!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WarningDelete;
