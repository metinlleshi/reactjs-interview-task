import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Category1 from './Category1';
import CreateCategory from './CreateCategory';
import Category2 from './Category2';
import Category5 from './Category5';
import Category3 from './Category3';
import Category4 from './Category4';
import Category16 from './Category16';
import Category33 from './Category33';

function Category() {
  return (
    <div>
      <CreateCategory />

      <Category1 />
      <Category5 />
      <Category3 />
      <Category4 />
      <Category16 />
      <Category33 />
      <Category2 />
      <Category2 />
      <Category4 />
      <Category4 />
      <Category4 />
      <Category4 />
      <Category4 />
      <Category4 />
      <Category4 />
      <Category4 />
      <Category4 />
      <Category4 />
      <Category4 />
      <Category4 />
    </div>
  );
}

export default Category;
