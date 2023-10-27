import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NoteForm from './NoteForm';
import CreateNote from './CreateNote';
import EditNote from './EditNote';

export default function MyRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<NoteForm />}></Route>
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route path="/create-note" element={<CreateNote />} />
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route path="/edit-note" element={<EditNote />}></Route>
        </Routes>
      </Router>
    </>
  );
}
