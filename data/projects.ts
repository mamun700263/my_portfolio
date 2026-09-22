export type Project = {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: "Narayanpur High School",
    description:
      "A role-based student management platform used by 500+ students, teachers, and staff. Features include automated exam grading and ranking, PDF result certificates, JWT authentication, and role-based access control.",
    image: "/projects/narayanpur_high_school.png",
    techStack: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "React",
      "Tailwind CSS",
    ],
    link: "https://www.narayanpurhighschool.edu.bd/",
    github: "https://github.com/TAVDEV-team/Narayanpur_high_school",
  },
  {
    name: "TavDev Monitor",
    description:
      "A full-stack uptime monitoring platform with configurable health checks and background monitoring. Designed with a concurrency-safe quota system using atomic database updates to prevent race conditions during simultaneous monitor creation.",
    image: "/projects/tavdev_monitor.png",
    techStack: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Next.js",
      "Docker",
    ],
    link: "https://monitor.tavdev.com/",
    github: "https://github.com/mamun700263/Tavdev_tools",
  },
];