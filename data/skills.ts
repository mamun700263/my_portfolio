export type Skill = {
  name: string;
  icon: string;
};

export const skills: Skill[] = [
  // Backend
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Django", icon: "/icons/django.svg" },
  { name: "Django REST Framework", icon: "/icons/django.svg" },
  { name: "FastAPI", icon: "/icons/fastapi.svg" },
  { name: "Celery", icon: "/icons/Celery.svg" },
  { name: "REST APIs", icon: "/icons/RestAPI.svg" },

  // Databases & Infrastructure
  { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
  { name: "SQL", icon: "/icons/sql.svg" },
  { name: "Redis", icon: "/icons/Redis.svg" },
  { name: "SQLAlchemy", icon: "/icons/sqlalchemy.svg" },
  { name: "Docker", icon: "/icons/Docker.svg" },
  { name: "Linux", icon: "/icons/linux.svg" },

  // Automation & Scraping
  { name: "Scrapy", icon: "/icons/scrapy.svg" },
  { name: "Playwright", icon: "/icons/playwright.svg" },

  // Development
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub Actions", icon: "/icons/github-actions.svg" },
  { name: "Bash", icon: "/icons/bash.svg" },
  { name: "C++", icon: "/icons/cpp.svg" },

  // Frontend
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
];