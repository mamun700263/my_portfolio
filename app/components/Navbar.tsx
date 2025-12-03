"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-semibold text-xl">
          Mamun
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "X" : "≡"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t border-gray-200">
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
