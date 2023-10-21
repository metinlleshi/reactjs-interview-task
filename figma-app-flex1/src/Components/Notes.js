import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateNote from './CreateNote';
import SearchBox from './SearchBox';

function Notes() {
  return (
    <header className="notes-header">
      <div className="note1">
        <CreateNote />
      </div>
      <div className="note2">
        <SearchBox />
      </div>
    </header>
  );
}

export default Notes;
