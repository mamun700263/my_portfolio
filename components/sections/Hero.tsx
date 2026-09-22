import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-24 max-w-6xl mx-auto px-6"
    >
      <div id="hero-text">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          I am <strong>Md Abdullah All Mamun</strong>
        </h1>

        <h3 className="text-lg md:text-xl text-gray-300 mb-6">
          I build  backend systems and automation platforms
          using Python, Django, FastAPI, and modern web technologies.
          <b>And you Can Belive THEM.</b> 
        </h3>

        <h4 className="text-gray-400">
          Available for part-time work in the UK during term time and
          full-time during university vacations.
        </h4>

        <div className="flex gap-4 mt-6">
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
          <span>1000+ DSA problems solved</span>
          <span>Backend Engineer | Scraping Specialist</span>
          <span>Fast learner & reliable</span>
        </div>
      </div>

<div
  id="hero-image"
  className="flex justify-center md:justify-end"
>
  <div
    className="
      w-64 md:w-96
      [mask-image:radial-gradient(ellipse_75%_85%_at_center,black_55%,transparent_100%)]
      [-webkit-mask-image:radial-gradient(ellipse_75%_85%_at_center,black_55%,transparent_100%)]
    "
  >
    <Image
      src="/profile_left.png"
      alt="Portrait of Md Abdullah All Mamun"
      width={400}
      height={400}
      priority
      className="w-full h-auto"
    />
  </div>
</div>
    </section>
  );
}