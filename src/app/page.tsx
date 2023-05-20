import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-5">
      <p className="text-xl">
        <Link href={"/post"} className="hover:underline">
          Tech Blog Posts
        </Link>
        <br />
        <Link href={"/counter"} className="hover:underline">
          Counter App
        </Link>
        <br />
        <Link href={"/about"} className="hover:underline">
          About
        </Link>
      </p>
    </div>
  );
}
