import React from 'react';
import './CreateCategory.css';
import { AiOutlinePlus } from 'react-icons/ai';
import ButtonWithIconOnRight from '../../shared/ButtonWithIconOnRight';

function CreateCategory() {
  return (
    <div className='create-category-container'>
      <ButtonWithIconOnRight
        label="Create Category"
        onClickHandler={() => { }}
        icon={<AiOutlinePlus />}
        customClasses={['create-category-btn']}
      />
    </div>
  );
}

export default CreateCategory;
