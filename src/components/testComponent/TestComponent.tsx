import { useEffect, useState } from "react";

// 37:37

type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const getPosts = (): Promise<PostType[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export function PostPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <p>{name}</p>
      <button onClick={() => setName("Borya")}>Button</button>
      <input
        aria-label="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </>
  );
}
