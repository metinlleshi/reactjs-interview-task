import React from 'react';
import Vector from './images/Vector.svg';
import './Category.css';

function Category5() {
  return (
    <div>
      <button type="button">
        <img src={Vector} alt="folder" className="foldericon" />
        Category (5)
      </button>
    </div>
  );
}

export default Category5;
