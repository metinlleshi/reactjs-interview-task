import React from 'react';
import { Link } from 'react-router-dom';
import { FaFolder } from 'react-icons/fa6';
import { BiSolidDownArrow } from 'react-icons/bi';
import './Category.css';

function Category({ categNumber }) {
    return (
        <Link className='category-element' to="/create-note">
            <FaFolder size={28} />
            Category ({categNumber})
            <BiSolidDownArrow className='category-arrow'/>
        </Link>
    );
}

export default Category;
