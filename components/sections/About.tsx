import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Left text column */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About Me
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Hi! I’m <strong>Md Abdullah All Mamun</strong>, a Fullstack Backend Engineer and Competitive Programmer.
          I build reliable, scalable systems using Python, Django, FastAPI, and modern web technologies. I love solving real-world problems and automating workflows.
        </p>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Currently, I’m pursuing my BSc in Computer Science at <strong>Wrexham University</strong>, living in <strong>CH5, UK</strong>. 
          I spend my time building production-grade backend systems, practicing DSA, and mentoring others in system design and automation.
        </p>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          When I’m not coding, I explore new technologies, contribute to open-source projects, and create mini automation tools to improve daily life. Reliability, scalability, and clarity are my core principles.
        </p>
      </div>

      {/* Right image + stats */}
      <div className="flex flex-col items-center md:items-start gap-6">
        <Image
          src="/profile_left.png"
          alt="Md Abdullah All Mamun"
          width={300}
          height={300}
          className="rounded-xl shadow-2xl w-48 md:w-72 h-auto"
        />

        <div className="flex flex-col md:flex-row gap-4 text-gray-400 text-sm md:text-base mt-4">
          <span>💻 1000+ DSA problems solved</span>
          <span>⚙️ Backend & Automation Expert</span>
          <span>🌍 Living in the UK</span>
        </div>
      </div>
    </section>
  );
}