"use client";

import { useState } from "react";
import EmailForm from "../email/email";
import BookingModal from "../BookingModal";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCalendar,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Contact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Info */}
        <div className="space-y-6 text-gray-300">
          <p>
            If you’d like to discuss a project, an opportunity, or just
            connect, feel free to reach out.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:mamun700263@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <FiMail className="text-lg" />
              <span>mamun700263@gmail.com</span>
            </a>

            <a
              href="https://github.com/mamun700263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <FiGithub className="text-lg" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/md-abdullah-all-mamun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <FiLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://x.com/MAMUN700263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <FaXTwitter className="text-lg" />
              <span>X</span>
            </a>
          </div>

          <p className="text-gray-500 text-sm pt-2">
            Based in Chester, England.
          </p>

          {/* Book a meeting */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-3">
              Prefer to talk directly? You can book a 30-minute call.
            </p>

            <button
              onClick={() => setShowBooking(true)}
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              <FiCalendar />
              Book a meeting
            </button>
          </div>
        </div>

        {/* Right Form */}
        <EmailForm />
      </div>

      {showBooking && (
        <BookingModal onClose={() => setShowBooking(false)} />
      )}
    </section>
  );
}