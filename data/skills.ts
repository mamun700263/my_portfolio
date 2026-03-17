export type Skill = {
  name: string;
  icon: string; // path to icon in public folder
  level?: number; // optional: 0-100 for expertise
};

export const skills: Skill[] = [
  { name: "Python", icon: "/icons/python.svg", level: 95 },
  { name: "Django", icon: "/icons/django.svg", level: 90 },
  { name: "FastAPI", icon: "/icons/fastapi.svg", level: 85 },
  { name: "React", icon: "/icons/react.svg", level: 80 },
  { name: "Scrapy", icon: "/icons/scrapy.svg", level: 90 },
  { name: "Playwright", icon: "/icons/playwright.svg", level: 85 },
  { name: "SQL", icon: "/icons/sql.svg", level: 80 },
  { name: "Git", icon: "/icons/git.svg", level: 90 },
];