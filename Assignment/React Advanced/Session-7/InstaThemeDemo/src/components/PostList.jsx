import PostCard from "./PostCard";

function PostList() {
  const posts = [
    {
      id: 1,
      username: "krish",
      caption: "Learning Context API 🚀",
    },
    {
      id: 2,
      username: "john",
      caption: "Dark Mode 🌙",
    },
    {
      id: 3,
      username: "emma",
      caption: "React is Awesome ❤️",
    },
  ];

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;