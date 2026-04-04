export type Skill = {
  name: string;
  icon: string; // path to icon in public folder
  level?: number; // optional: 0-100 for expertise
};

export const skills: Skill[] = [
  { name: "Python", icon: "/icons/skills/python.svg", level: 95 },
  { name: "Django", icon: "/icons/skills/django.svg", level: 90 },
  { name: "FastAPI", icon: "/icons/skills/fastapi.svg", level: 85 },
  { name: "React", icon: "/icons/skills/react.svg", level: 80 },
  { name: "Scrapy", icon: "/icons/skills/scrapy.svg", level: 90 },
  { name: "Playwright", icon: "/icons/skills/playwright.svg", level: 85 },
  { name: "SQL", icon: "/icons/skills/sql.svg", level: 80 },
  { name: "Git", icon: "/icons/skills/git.svg", level: 90 },
  { name: "Docker", icon: "/icons/skills/Docker.svg", level:50},
  { name: "Redis", icon: "/icons/skills/Redis.svg", level:90},
  { name: "Celery", icon: "/icons/skills/Celery.svg", level:60},
  { name: "RestAPI", icon: "/icons/skills/RestAPI.svg", level:60},
  { name: "PostgresSQL", icon: "/icons/skills/PostgresSQL.svg", level:60},
  
];