import React from 'react';
import Path4522 from './images/Path4522.svg';
import './SearchBar.css';

const SearchFilter = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };
  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <img src={Path4522} alt="lupa" className="lupa" id="search-icon" />
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
      </form>
    </header>
  );
};

export default SearchFilter;
