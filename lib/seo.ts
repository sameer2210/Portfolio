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
  title: "Sameer Khan | Full Stack Web Developer Portfolio",
  description:
    "Sameer Khan is a full stack web developer in Bhopal, India, specializing in MERN stack, Next.js, scalable web apps, and production-ready APIs.",
  location: "Bhopal, Madhya Pradesh, India",
  email: "sameerkhan27560@gmail.com",
  twitterHandle: "@Sameer2210_",
  github: "https://github.com/sameer2210",
  linkedin: "https://www.linkedin.com/in/sameer-khan2210/",
  twitter: "https://x.com/Sameer2210_",
  instagram: "https://www.instagram.com/isameer_22",
} as const;

export const sameAsLinks = [
  siteConfig.github,
  siteConfig.linkedin,
  siteConfig.twitter,
  siteConfig.instagram,
] as const;
