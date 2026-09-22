import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group border border-gray-800 rounded-xl overflow-hidden bg-gray-950"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-gray-700 text-gray-300 text-xs px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 text-sm">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition"
                >
                  <FiExternalLink />
                  Live Demo
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}