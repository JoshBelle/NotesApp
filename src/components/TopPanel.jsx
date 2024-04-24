import React from 'react';
import Categories from './Categories';
import SearchAddPanel from './SearchAddPanel';


const TopPanel = () => {
    return (
        <div className="w-1200 bg-white mx-auto flex justify-between px-4 py-4  mx-9 my-2 rounded-md shadow">
            <Categories />
            <SearchAddPanel />
        </div>
    );
};

export default TopPanel;
