"use client";

import Link from "next/link";
import { useState } from "react";
import BookingModal from "../BookingModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Brand */}
          <Link
            href="/"
            className="text-white font-semibold text-lg tracking-tight hover:text-gray-300 transition"
          >
            Mamun
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-gray-400">
            <Link
              href="#about"
              className="hover:text-white transition"
            >
              About
            </Link>

            <Link
              href="#skills"
              className="hover:text-white transition"
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </Link>

            <Link
              href="/vlogs"
              className="hover:text-white transition"
            >
              Vlogs
            </Link>

            <Link
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </Link>

            <button
              onClick={() => setShowBooking(true)}
              className="border border-gray-700 hover:border-gray-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
            >
              Book a call
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-400 hover:text-white transition"
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <div className="flex flex-col px-6 py-6 gap-5 text-gray-400">

              <Link
                href="#about"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                About
              </Link>

              <Link
                href="#skills"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Skills
              </Link>

              <Link
                href="#projects"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Projects
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Vlogs
              </Link>

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  setShowBooking(true);
                  setOpen(false);
                }}
                className="border border-gray-700 hover:border-gray-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition text-left"
              >
                Book a call
              </button>
            </div>
          </div>
        )}
      </nav>

      {showBooking && (
        <BookingModal onClose={() => setShowBooking(false)} />
      )}
    </>
  );
}