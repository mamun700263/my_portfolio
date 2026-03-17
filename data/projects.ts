export type Project = {
  name: string;
  description: string;
  image: string; // path in public folder
  techStack: string[];
  link: string; // live project or GitHub
};

export const projects: Project[] = [
  {
    name: "Amazon Scraper",
    description:
      "Production-grade scraper for Amazon, built with Scrapy + Playwright, stealth and anti-bot optimized.",
    image: "/projects/amazon_scraper.png",
    techStack: ["Python", "Scrapy", "Playwright", "Docker"],
    link: "https://github.com/mamun700263/amazon-scraper",
  },
  {
    name: "Datastrike Automation Platform",
    description:
      "FastAPI + Celery system for scraping, automation, multi-format export (CSV, JSON, Excel, GSheet).",
    image: "/projects/datastrike.png",
    techStack: ["Python", "FastAPI", "Celery", "PostgreSQL"],
    link: "https://github.com/mamun700263/datastrike",
  },
  {
    name: "Course Platform",
    description:
      "Modular, high-performance platform for managing and delivering courses with dashboards.",
    image: "/projects/course_platform.png",
    techStack: ["Django", "React", "Tailwind", "PostgreSQL"],
    link: "https://github.com/mamun700263/course-platform",
  },
];