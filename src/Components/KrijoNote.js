import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Path6825 from './images/Path6825.svg';
import './Notes.css';
import KutiaSearch from './KutiaSearch';
import NoteBody from './NoteBody';
import SearchResultList from './SearchResultList';

function KrijoNote() {
  const [results, setResults] = useState([]);

  return (
    <div className="maindiv2">
      <div className="child1div">
        <button type="button" className="createnote">
          Create Note
          <img src={Path6825} alt="add" className="addsign" />
        </button>
        <div className="notebody"></div>
        <div className="search-bar-div">
          <KutiaSearch setResults={setResults} />
        </div>
      </div>
    </div>
  );
}

export default KrijoNote;
