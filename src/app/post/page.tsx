import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Our Tech Blog Posts",
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getAllPosts() {
  const data = (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  return data;
}

export default async function Posts() {
  const allPosts = getAllPosts();
  const [posts] = await Promise.all([allPosts]);
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold">All Posts</h1>
      <div className="flex flex-wrap justify-around">
        {posts.map((post: Post) => (
          <div
            key={post.id}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-purple-950"
          >
            <Link href={`/post/${post.id}`} key={post.id}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-400 text-base">{post.body}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  Post {post.id}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  User {post.userId}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
