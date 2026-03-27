"use client";

import { useState } from "react";
import EmailForm from "../email/email";
import BookingModal from "../BookingModal";

export default function ContactSection() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Info */}
        <div className="space-y-6 text-gray-300">
          <p>
            You can reach me via email or check out my GitHub.
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:mamun700263@gmail.com" className="text-purple-400 underline">
              mamun700263@gmail.com
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/mamun700263"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline"
            >
              github.com/mamun700263
            </a>
          </p>

          <p>
            <strong>Location:</strong> Wrexham, UK
          </p>

          {/* Book a meeting */}
          <div className="pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm mb-3">
              Prefer to talk directly? Schedule a free 30-minute call.
            </p>
            <button
              onClick={() => setShowBooking(true)}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a meeting
            </button>
          </div>
        </div>

        {/* Right Form */}
        <EmailForm />
      </div>

      {/* Booking Modal */}
      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
    </section>
  );
}