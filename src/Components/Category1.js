import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Vector from './images/Vector.svg';

function Category1() {
  return (
    <div>
      <Router>
        <Link to="/create-note">
          <button type="button" className="category1button">
            <img src={Vector} alt="folder" className="foldericon" />
            Category (1)
          </button>
        </Link>
      </Router>
    </div>
  );
}

export default Category1;
