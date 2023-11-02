import React from 'react';
import CreateCategory from './CreateCategory';
import Category from './Category';

function Categories() {
  const categoriesList = [
    { name: 'Category (1)' },
    { name: 'Category (2)' },
    { name: 'Category (3)' },
    { name: 'Category (4)' },
    { name: 'Category (5)' },
    { name: 'Category (6)' },
    { name: 'Category (7)' },
    { name: 'Category (8)' },
    { name: 'Category (9)' },
    { name: 'Category (10)' },
    { name: 'Category (11)' },
    { name: 'Category (12)' },
    { name: 'Category (13)' },
    { name: 'Category (14)' },
    { name: 'Category (15)' },
    { name: 'Category (16)' },
    { name: 'Category (17)' },
    { name: 'Category (18)' },
    { name: 'Category (19)' },
    { name: 'Category (20)' },
    { name: 'Category (21)' },
    { name: 'Category (22)' },
    { name: 'Category (23)' },
    { name: 'Category (24)' },
  ];

  return (
    <>
      <CreateCategory />
      {categoriesList.map((el) => (
        <Category name={el.name} />
      ))}
    </>
  );
}

export default Categories;
