import React from 'react';
import { Link } from 'react-router-dom';

import Vector from './images/Vector.svg';

function Category({ name }) {
  return (
    <div>
      <Link to="/create-note">
        <button type="button">
          <img src={Vector} alt="folder" className="foldericon" />
          {name}
        </button>
      </Link>
    </div>
  );
}

export default Category;
