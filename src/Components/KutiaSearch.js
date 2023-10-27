import React, { useState, seEffect, useEffect } from 'react';
import Path4522 from './images/Path4522.svg';
import { getPosts } from './api/axios';
import SearchFilter from './SearchFilter';
import ListPage2 from './ListPage2';

import './SearchBar.css';

function KutiaSearch() {
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
      <ListPage2 searchResults={searchResults} />
    </>
  );
}

export default KutiaSearch;
