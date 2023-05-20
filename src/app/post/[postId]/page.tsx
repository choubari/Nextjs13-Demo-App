import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Single Post",
//   description: "Tech Blog Post",
// };

interface PageProps {
  params: {
    postId: number;
  };
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = (await res.json()) as Post;
  return { title: data.title };
}

async function getPost(id: number) {
  const data = (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
  return data;
}
interface PageProps {
  params: {
    postId: number;
  };
}
export default async function Post(props: PageProps) {
  // console.log(props);
  // console.log(props.params.postId);
  const id = props.params.postId;
  const [post] = await Promise.all([getPost(id)]);
  console.log(post);
  if (Object.keys(post).length === 0) {
    throw new Error("Post does not exist");
  }
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold">Dynamic Post Page, ID: {id}</h1>

      <div key={post.id} className="rounded shadow-lg m-4 bg-purple-950">
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
      </div>
    </div>
  );
}
