const FALLBACK_SITE_URL = "https://portfolio-coral-two-16.vercel.app";

const normalizeSiteUrl = (url: string) => {
  const withProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  return withProtocol.replace(/\/+$/, "");
};

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE_URL
);

export const siteConfig = {
  name: "Sameer Khan",
  siteName: "Sameer Khan Portfolio",
  title: "Sameer Khan | Full Stack Developer & Software Engineer Portfolio",
  description:
    "Sameer Khan is a Full Stack Developer & Software Engineer specializing in React, Next.js, Node.js, NestJS, Java, MERN stack, React Native, REST APIs, microservices, PostgreSQL, MongoDB, Redis, Docker, and AWS. View projects, system architecture, and experience.",
  location: "Bhopal, Madhya Pradesh, India",
  email: "sameerkhanorigin@gmail.com",
  phone: "+91-XXXXXXXXXX",
  twitterHandle: "@Sameer2210_",
  github: "https://github.com/sameer2210",
  linkedin: "https://www.linkedin.com/in/sameer2210/",
  twitter: "https://x.com/Sameer2210_",
  instagram: "https://www.instagram.com/isameer_22",
  youtube: "https://www.youtube.com/channel/UCkJWIW5koQOLwPgdE25p6jg",
  resume:
    "https://drive.google.com/drive/folders/1gFWOYpLKE1Ppj7HpTV_lKFuqpDn2O2wY?usp=sharing",
} as const;

export const sameAsLinks = [
  siteConfig.github,
  siteConfig.linkedin,
  siteConfig.twitter,
  siteConfig.instagram,
  siteConfig.youtube,
] as const;

export const targetKeywords = [
  "Sameer Khan",
  "Sameer Khan Developer",
  "Sameer Khan Portfolio",
  "Sameer Khan MERN",
  "Sameer Khan Java Developer",
  "Sameer Khan React Developer",
  "Sameer Khan Software Engineer",
  "Full Stack Developer",
  "Full Stack Developer Portfolio",
  "React Developer Portfolio",
  "Node.js Portfolio",
  "Java Portfolio",
  "MERN Portfolio",
  "MERN Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "Java Developer",
  "NestJS Developer",
  "React Native Developer",
  "Software Engineer",
  "Backend Developer",
  "Frontend Developer",
  "API Developer",
  "MongoDB",
  "PostgreSQL",
  "TypeScript Developer",
  "JavaScript Developer",
  "AWS",
  "Docker",
  "Scalable Web Applications",
  "System Design",
  "REST APIs",
  "Performance Optimization",
  "Clean Architecture",
  "Open Source",
];
