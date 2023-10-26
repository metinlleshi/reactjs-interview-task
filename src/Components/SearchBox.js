import React, { useState, seEffect, useEffect } from 'react';
import Path4522 from './images/Path4522.svg';
import { getPosts } from './api/axios';
import SearchFilter from './SearchFilter';
import ListPage from './ListPage';

import './SearchBar.css';

function SearchBox() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  return (
    <>
      <SearchFilter posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  );
}

export default SearchBox;
