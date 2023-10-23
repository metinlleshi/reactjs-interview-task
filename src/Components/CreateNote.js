import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Path6825 from './images/Path6825.svg';
import './Notes.css';
import SearchBox from './SearchBox';
import NoteBody from './NoteBody';

function CreateNote() {
  return (
    <div className="maindiv2">
      <div className="child1div">
        <button type="button" className="createnote">
          Create Note
          <img src={Path6825} alt="add" className="addsign" />
        </button>
        <div className="notebody">
          <NoteBody />
        </div>
        <div className="search-bar-div">
          <SearchBox />
        </div>
      </div>
    </div>
  );
}

export default CreateNote;