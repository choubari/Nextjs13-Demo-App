import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Blog",
  description: "Your fav tech blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-red-400 text-white">
          Header {"  "}
          <Link href={"/"} className="underline">
            Back to Home
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
