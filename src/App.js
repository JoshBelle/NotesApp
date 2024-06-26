import './App.css';
import NotesGrid from './components/NotesGrid';
import TopPanel from './components/TopPanel';
import { useState } from 'react';
import WarningDelete from './components/WarningDelete';


function App() {

  return (
    <div className="px-10 bg-slate-100">
        <h1 className='px-10 py-5'>Notes</h1>

        <TopPanel />
        <NotesGrid/>



    </div>
  );
}

export default App;
