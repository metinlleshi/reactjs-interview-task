import React from 'react';
import Post from './Post.js';
// import './SearchBar.css';

const NotesList = ({ searchResults, setSelectedNote }) => {
  const results = searchResults.map((post) => (
    <Post key={post.id} post={post} setSelectedNote={setSelectedNote} />
  ));

  const content = results?.length ? 
      results
   : (
    <article>
      <p>No Matching Posts</p>
    </article>
  );
  return (
    <div className='notes-list-body'>
      {content}
    </div>
  );
};

export default NotesList;
