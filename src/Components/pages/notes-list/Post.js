const Post = ({ post, setSelectedNote }) => {
  return (
    <article tabIndex={1} onClick={() => setSelectedNote({...post})}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
    </article>
  );
};

export default Post;
