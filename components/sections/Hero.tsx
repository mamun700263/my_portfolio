import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-24 max-w-6xl mx-auto px-6 "
    >
      <div id="hero-text">
        <h1>
          I am <strong>Md Abdullah All Mamun</strong>
        </h1>

        <h3>
          I build scalable backend systems and automation platforms
          using Python, Django, FastAPI, and modern web technologies.
        </h3>

        <div>
          <a href="https://github.com/mamun700263" className="p-2">GitHub</a>
          <a href="#projects" className="p-2">Projects</a>
        </div>
      </div>

      <div id="hero-image" className="flex justify-center md:justify-end">
        <Image
          src="/profile_left.png"
          alt="Portrait of Md Abdullah All Mamun"
          width={400}
          height={400}
          

        />
      </div>
    </section>
  );
}