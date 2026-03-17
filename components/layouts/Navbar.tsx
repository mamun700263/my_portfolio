"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Brand */}
        <Link
          href="/"
          className="text-white font-semibold text-lg tracking-tight hover:text-purple-400 transition"
        >
          Mamun
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="/about" className="hover:text-purple-400 transition">
            About
          </Link>

          <Link href="/skills" className="hover:text-purple-400 transition">
            Skills
          </Link>

          <Link href="/projects" className="hover:text-purple-400 transition">
            Projects
          </Link>

          <Link href="/vlogs" className="hover:text-purple-400 transition">
            Vlogs
          </Link>

          <Link href="/contact" className="hover:text-purple-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white transition"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <div className="flex flex-col px-6 py-6 gap-5 text-gray-300">

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="hover:text-purple-400 transition"
            >
              About
            </Link>

            <Link
              href="/skills"
              onClick={() => setOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Skills
            </Link>

            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Projects
            </Link>

            <Link
              href="/vlogs"
              onClick={() => setOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Vlogs
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}