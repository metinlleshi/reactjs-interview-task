import React from 'react';
import './Category.css';
import Path6825 from './images/Path6825.svg';

function CreateCategory() {
  return (
    <div>
      <button type="button" className="createcategory">
        Create Category
        <img src={Path6825} alt="add" className="addsign" />
      </button>
    </div>
  );
}

export default CreateCategory;
