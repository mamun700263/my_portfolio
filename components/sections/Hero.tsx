import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"; // for Projects

export default function HeroSection() {
  return (
<section
  id="hero"
  className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-24 max-w-6xl mx-auto px-6 bg-gradient-to-r from-black via-gray-900 to-black"
>
  <div id="hero-text">
    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
      I am <strong>Md Abdullah All Mamun</strong>
    </h1>

    <h3 className="text-lg md:text-xl text-gray-300 mb-6">
      I build scalable backend systems and automation platforms
      using Python, Django, FastAPI, and modern web technologies.
    </h3>
    <h4>Available to work parttime in uk during term times and fulltime during vacation</h4>
    <div className="flex gap-4 mt-4">
      <a
        href="https://github.com/mamun700263"
        className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        <FaGithub className="mr-2" /> GitHub
      </a>

      <a
        href="#projects"
        className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
      >
        <FiExternalLink className="mr-2" /> Projects
      </a>
    </div>

    <div className="mt-6 flex flex-col md:flex-row gap-4 text-gray-400 text-sm md:text-base">
      <span>💻 1000+ DSA problems solved</span>
      <span>⚙️ Backend Engineer | Scraping Specialist</span>
      <span>🚀 Fast learner & reliable</span>
    </div>
  </div>

  <div id="hero-image" className="flex justify-center md:justify-end">
    <Image
      src="/profile_left.png"
      alt="Portrait of Md Abdullah All Mamun"
      width={400}
      height={400}
      className="rounded-xl shadow-2xl w-64 md:w-96 h-auto"
    />
  </div>

  <div className="absolute right-0 top-1/4 w-72 h-72 bg-purple-700 rounded-full opacity-20 -z-10"></div>

  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
    ↓
  </div>
</section>
  );
}