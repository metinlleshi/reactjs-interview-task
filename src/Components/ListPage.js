import React from 'react';
import Post from './Post.js';
import './SearchBar.css';

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((post) => (
    <Post key={post.id} post={post} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Posts</p>
    </article>
  );
  return <main className="note-descriptions">{content}</main>;
};

export default ListPage;
