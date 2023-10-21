import React from 'react';

import Vector from './images/Vector.svg';

function Category1() {
  return (
    <div>
      <button type="button">
        <img src={Vector} alt="folder" className="foldericon" />
        Category (1)
      </button>
    </div>
  );
}

export default Category1;
