import React from 'react';
import NotesItem from './NotesItem';
import { useGetNotesQuery } from '../redux/apiSlice';

const NotesGrid = () => {
    const categoryColors = {
        All: '#000000', // черный
        Business: '#FF0000', // красный
        Social: '#00FF00', // зеленый
        Home: '#0000FF', // синий
        Personal: '#FFFF00', // желтый
    };

    const getCategoryColor = (category) => {
      return categoryColors[category]
    }

    const { data: notes, isLoading, isError } = useGetNotesQuery();
    console.log(notes);
    return (
        <div className="w-1200 bg-slate-100 mx-auto grid grid-cols-4 gap-4 p-10">
            {notes &&
                notes.map((note) => <NotesItem color={() => getCategoryColor(note.category)}  key={note.Title} note={note} />)}
        </div>
    );
};

export default NotesGrid;
