import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-semibold">
            Md Abdullah All Mamun
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Backend engineer building scalable systems and automation platforms.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="hover:text-purple-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-purple-400 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-purple-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-purple-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:mamun700263@gmail.com"
                className="hover:text-purple-400 transition"
              >
                Email
              </a>
            </li>

            <li>
              <a
                href="https://github.com/mamun700263"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/md-abdullah-all-mamun/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © 2026 Md Abdullah All Mamun. All rights reserved.
      </div>
    </footer>
  );
}