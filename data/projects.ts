export type Project = {
  name: string;
  description: string;
  image: string; // path in public folder
  techStack: string[];
  link: string; // live project or GitHub
};

export const projects: Project[] = [

  {
    name: "Narayanpur High School Backend",
    description:
      "Full Stack web app to maintain a high schools students, teachers , staff built with dajngo , react, redis used by 500+",
    image: "/projects/narayanpur_high_school_backend.png",
    techStack: ["Python", "Django", "redis", "celery"],
    link: "https://narayanpur-high-school.onrender.com/",
  },
    {
    name: "Narayanpur High School Frontend",
    description:
      "Full Stack web app to maintain a high schools students, teachers , staff built with dajngo , react, redis used by 500+",
    image: "/projects/narayanpur_high_school.png",
    techStack: ["React", "Tailwind"],
    link: "https://www.narayanpurhighschool.edu.bd/",
  },
    {
    name: "Amazon Scraper",
    description:
      "Production-grade scraper for Amazon, built with Scrapy + Playwright, stealth and anti-bot optimized.",
    image: "/projects/amazon_scraper.png",
    techStack: ["Python", "Scrapy", "Playwright", "Docker"],
    link: "https://github.com/mamun700263/amazon-scraper",
  }

];