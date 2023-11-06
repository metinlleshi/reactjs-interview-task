import React from 'react';
import CreateCategory from '../createCategory/CreateCategory';
import Category from '../category/Category';

function Categories() {

  const categoriesList = [
    { categNumber: 1 },
    { categNumber: 2 },
    { categNumber: 3 },
    { categNumber: 4 },
    { categNumber: 5 },
    { categNumber: 6 },
    { categNumber: 7 },
    { categNumber: 8 },
    { categNumber: 9 },
    { categNumber: 10 },
    { categNumber: 11 },
    { categNumber: 12 },
    { categNumber: 13 },
    { categNumber: 14 },
    { categNumber: 15 },
    { categNumber: 16 },
    { categNumber: 17 },
    { categNumber: 18 },
    { categNumber: 19 },
    { categNumber: 20 },
    { categNumber: 21 },
    { categNumber: 22 },
    { categNumber: 23 },
    { categNumber: 24 },
    { categNumber: 25 },
    { categNumber: 26 },
    { categNumber: 27 },
    { categNumber: 28 },
    { categNumber: 29 },
    { categNumber: 30 },
    { categNumber: 31 },
    { categNumber: 32 },
    { categNumber: 33 },
    { categNumber: 34 },
    { categNumber: 35 },
    { categNumber: 36 },
    { categNumber: 37 },
    { categNumber: 38 },
    { categNumber: 39 },
    { categNumber: 40 },
    { categNumber: 41 },
    { categNumber: 42 },
    { categNumber: 43 },
    { categNumber: 44 },
    { categNumber: 45 },
    { categNumber: 46 },
    { categNumber: 47 },
    { categNumber: 48 },
    { categNumber: 49 },
    { categNumber: 50 },
    { categNumber: 51 },
    { categNumber: 52 },
    { categNumber: 53 },
    { categNumber: 54 },
    { categNumber: 55 },
    { categNumber: 56 },
    { categNumber: 57 },
    { categNumber: 58 },
    { categNumber: 59 },
  ];

  return (
    <>
      <CreateCategory />
      {categoriesList.map(el => <Category key={el.categNumber} categNumber={el.categNumber} />)}
    </>
  );
}

export default Categories;
