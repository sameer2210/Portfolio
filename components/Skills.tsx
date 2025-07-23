"use client";
import { IconCloud } from "@/components/ui/IconCloud";

// Updated slugs with working alternatives
const slugs = [
  "typescript",
  "javascript",
  "openjdk", //  Changed from "java" to "openjdk"
  "html5",
  "css3",
  "react",
  "nodedotjs",
  "express",
  "nextdotjs",
  "mongodb",
  "vercel",
  "docker",
  "git",
  "github",
  "figma",
  "tailwindcss",
  //  Optional: Add more reliable icons
  // "python",
  // "postgresql",
  "redux",
];

function Skills() {
  return (
    <div className="my-10 py-10">
      <h1 className="heading">
        Skills &amp; <span className="text-purple">Technologies</span>
      </h1>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Skills;
