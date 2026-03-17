import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400">
              {project.name}
            </h3>

            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}