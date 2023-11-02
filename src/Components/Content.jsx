import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import NoteForm from './NoteForm';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import Categories from './Categories';

export default function Content() {
  return (
    <BrowserRouter>
      <div className="sideBar">
        <Categories />
      </div>
      <Routes>
        <Route exact path="/" element={<NoteForm editing={false} />}></Route>
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/edit-note" element={<EditNote />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
