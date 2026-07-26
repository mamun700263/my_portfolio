export type Project = {
  name: string;
  description: string;
  image: string; // path in public folder
  techStack: string[];
  link: string; // live project or GitHub
};

export const projects: Project[] = [
  {
    name: "Narayanpur High School",
    description:
      "A role-based student management platform used by 500+ students, teachers, and staff — featuring automated exam grading and ranking across multiple subjects, PDF result certificates, and JWT-based access control.",
    image: "/projects/narayanpur_high_school.png",
    techStack: ["Django", "DRF", "PostgreSQL", "Redis", "React", "Tailwind"],
    link: "https://www.narayanpurhighschool.edu.bd/",
  },
  {
    name: "Tavdev Monitor",
    description:
      "A full-stack uptime monitoring platform with configurable health checks, built with a concurrency-safe quota system using atomic database updates to eliminate race conditions under simultaneous monitor-creation requests.",
    image: "/projects/tavdev_monitor.png",
    techStack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Next.js", "Docker"],
    link: "https://monitor.tavdev.com/",
  },
];