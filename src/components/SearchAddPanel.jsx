import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../redux/filterSlice';
import { useGetNotesQuery, useSearchNotesQuery } from '../redux/apiSlice';

const SearchAddPanel = () => {
    const {data: notes} = useGetNotesQuery();
    
                                                           

    const dispatch = useDispatch();

    const handleSearchValue = (value) => {
        dispatch(setSearch(value));
    };

    const valueSearch = useSelector((state) => state.filter.filter);

    useSearchNotesQuery(valueSearch);

    return (
        <div
            onChange={(e) => handleSearchValue(e.target.value)}
            className="flex gap-[12px]"
        >
            <input
                className="px-4 py-2 border border-1 border-blue-500 rounded-lg"
                placeholder="Search for..."
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Add New
            </button>
        </div>
    );
};

export default SearchAddPanel;
