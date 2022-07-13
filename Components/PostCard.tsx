
const PostCard = ({post}:any) => {
  return (
    <>
      <div>{post.title}</div>
      <div>{post.excerpt}</div>
    </>
  );
}

export default PostCard