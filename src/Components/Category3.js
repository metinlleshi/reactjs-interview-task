import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Vector from './images/Vector.svg';

function Category3() {
  return (
    <div>
      <button type="button">
        <img src={Vector} alt="folder" className="foldericon" />
        Category (12)
      </button>
    </div>
  );
}

export default Category3;
