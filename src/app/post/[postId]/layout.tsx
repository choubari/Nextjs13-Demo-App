import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-blue-600 text-white">
        <Link href={"/post"} className="underline">
          All Posts
        </Link>
      </div>
      {children}
    </section>
  );
}
