import { skills } from "@/data/skills"
import Image from "next/image";

export default function SkillSection() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        My Skills
      </h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {skills.map((skill) => (
    <div key={skill.name} className="flex flex-col items-center">
      <Image
        // src={skill.icon}
        src="/icons/git.svg"
        alt={skill.name}
        width={64}
        height={64}
        className="mb-2"
      />
      <span className="text-gray-300 font-semibold">{skill.name}</span>

      {skill.level && (
        <div className="w-20 h-2 bg-gray-700 rounded-full mt-1">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${skill.level}%` }} //where?
          ></div>
        </div>
      )}
    </div>
  ))}
</div>
    </section>
  );
}