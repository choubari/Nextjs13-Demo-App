type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const home = "http://localhost:3000/";

export default async function sitemap() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const allPosts = (await res.json()) as Post[];

  const dynamicRoutes = allPosts.map((post) => ({
    url: `${home}post/${post.id}`,
    lastModified: new Date().toISOString(),
  }));
  const staticRoutes = ["", "/about", "/counter", "/post"].map((route) => ({
    url: `${home}/${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...dynamicRoutes, ...staticRoutes];
}
