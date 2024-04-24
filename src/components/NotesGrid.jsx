// NotesGrid.js
import React, { useEffect } from 'react';
import NotesItem from './NotesItem';
import { useGetNotesQuery} from '../redux/apiSlice';
import { useSelector } from 'react-redux';

const NotesGrid = () => {
    const filter = useSelector((state) => state.filter);
    const search = useSelector((state) => state.search);

    const { data: notes, isLoading, isError } = useGetNotesQuery(filter, search);

    console.log(notes)


    const categoryColors = {
        All: 'bg-black-400', // черный
        Business: 'bg-red-400', // красный
        Social: 'bg-green-400', // зеленый
        Home: 'bg-blue-400', // синий
        Personal: 'bg-yellow-400', // желтый
    };

    const getColor = (category) => {
        for (let key in categoryColors) {
            if (category.includes(key)) {
                return categoryColors[key];
            }
        }
        return '';
    };

    return (
        <div className="w-1200 bg-slate-100 mx-auto grid grid-cols-4 gap-4 p-10">
            {notes &&
                notes.map((note) => (
                    <NotesItem
                        key={note.title}
                        color={getColor(note.category)}
                        note={note}
                    />
                ))}
        </div>
    );
};

export default NotesGrid;
