// "use client";

export const metadata = {
  title: "About Page",
  description: "About this blog",
};

export default function About() {
  console.log("About");
  return (
    <div>
      <h1 className="text-3xl">About Page</h1>
      <p>Demo App of Next.js 13 Features</p>
    </div>
  );
}
