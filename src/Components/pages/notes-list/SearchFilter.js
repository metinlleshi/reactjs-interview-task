import React from 'react';

import './SearchInput.css';

const SearchFilter = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleOnChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };
  return (
    <div className="search-box-container">
      <input
        type="search"
        placeholder="Search..."
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchFilter;
