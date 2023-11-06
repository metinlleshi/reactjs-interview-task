import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NoteForm from './Components/pages/create-note/NoteForm';
import NotesListPage from './Components/pages/notes-list/NotesListPage';
import Categories from './Components/sidebar/categories/Categories';

export default function Content() {
  return (
    <BrowserRouter>
      <div id="sidebar">
        <Categories />
      </div>
      <Routes>
        <Route exact path="/" element={<NoteForm editing={false} />}></Route>
        <Route path="/create-note" element={<NotesListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
