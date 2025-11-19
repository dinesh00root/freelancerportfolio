import { Cloud, Code } from "lucide-react";

export const education = {
  degree: "Bachelor of Technology",
  field: "Computer Science and Engineering",
  university: "KL University",
  period: "2020 - 2024",
  cgpa: "8.9",
} as const;

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "July 2022",
    icon: Cloud,
  },
  {
    name: "Wipro Java Full Stack Certification",
    issuer: "Wipro",
    date: "March 2024",
    icon: Code,
  },
] as const;

export const skillCategories = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "React Native CLI",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  { category: "Styling & UI", items: ["Tailwind CSS", "shadcn/ui", "CSS"] },
  {
    category: "Backend & Database",
    items: ["Node.js", "Django", "MySQL", "Prisma", "Redis", "GraphQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "GCP"],
  },
  {
    category: "Tools & Services",
    items: ["RESTful APIs", "Cron", "Firebase", "Kafka"],
  },
] as const;
