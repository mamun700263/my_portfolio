import Image from "next/image";
import { skills } from "@/data/skills";

const categories = [
  {
    title: "Backend",
    skills: skills.slice(0, 6),
  },
  {
    title: "Databases & Infrastructure",
    skills: skills.slice(6, 12),
  },
  {
    title: "Automation & Scraping",
    skills: skills.slice(12, 14),
  },
  {
    title: "Development",
    skills: skills.slice(14, 18),
  },
  {
    title: "Frontend",
    skills: skills.slice(18, 21),
  },
];

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Skills & Technologies
      </h2>

      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-semibold text-gray-400 mb-6">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-3 min-h-28"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={48}
                    height={48}
                    unoptimized
                  />

                  <span className="text-gray-300 text-sm font-medium text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}