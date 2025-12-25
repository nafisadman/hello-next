import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center">
      <Link href="/" className="text-lg font-semibold">🐋 Dev-Story</Link>

      <nav className="space-x-5">
        <Link href="/about">about</Link>
        <Link href="/login">login</Link>
        <Link href="/register">register</Link>
        <Link href="/stories">stories</Link>
        <Link href="/tutorials">tutorials</Link>
      </nav>
    </header>
  );
};

export default Header;
