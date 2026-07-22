"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoCheckmarkOutline, IoCopyOutline } from "react-icons/io5";

const stack = [
  "React & Next.js",
  "Node.js & NestJS",
  "Java & TypeScript",
  "MongoDB & PostgreSQL",
  "Redis & Prisma",
  "Docker & AWS",
  "React Native",
  "REST APIs & WebSockets",
];

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("sameerkhanorigin@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="about" className="py-20 w-full">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-white/30 text-xs tracking-[0.25em] uppercase font-mono mb-4"
        >
          /01 — ABOUT &amp; EXPERTISE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
        >
          Engineering software <br className="hidden md:block" />
          <span className="text-purple">that scales in production.</span>
        </motion.h2>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — bio text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <p className="text-white/70 text-base md:text-lg leading-[1.8]">
            I&apos;m <strong className="text-white font-semibold">Sameer Khan</strong> — a Full Stack Developer &amp; Software Engineer based in Bhopal, India. I specialize in designing resilient backend architectures, high-performance web interfaces, and production-ready mobile applications.
          </p>
          <p className="text-white/50 text-sm md:text-base leading-[1.8]">
            My core technical suite includes <strong className="text-white/80">React, Next.js, Node.js, NestJS, Java, TypeScript, MongoDB, PostgreSQL, Redis, Docker, and AWS</strong>. From architecting AI healthcare platforms and real-time WebRTC collaborative environments to building secure payment NGO platforms and e-commerce applications, I deliver high-quality, clean code solutions.
          </p>
          <p className="text-white/50 text-sm md:text-base leading-[1.8]">
            Whether optimizing database aggregation pipelines to cut response latency by 35% or containerizing microservices for GitHub Actions CI/CD pipelines, I focus on system reliability, WCAG AA accessibility, and Core Web Vitals optimization.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleCopy}
              aria-label="Copy Sameer Khan's email address"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {copied ? (
                <>
                  <IoCheckmarkOutline className="text-purple text-lg" />
                  <span className="text-purple font-medium">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <IoCopyOutline className="group-hover:text-purple transition-colors duration-200 text-lg" />
                  <span>sameerkhanorigin@gmail.com</span>
                </>
              )}
            </button>
            <span className="w-px h-4 bg-white/10" aria-hidden="true" />
            <a
              href="https://drive.google.com/drive/folders/1gFWOYpLKE1Ppj7HpTV_lKFuqpDn2O2wY?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all duration-200"
            >
              View Full Resume ↗
            </a>
          </div>
        </motion.div>

        {/* Right — stack + number facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-col gap-10"
        >
          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase font-mono mb-5">
              Primary Tech Stack &amp; Tools
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {stack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.035, duration: 0.35 }}
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors duration-200 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple flex-shrink-0" />
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex gap-8 border-t border-white/[0.08] pt-8">
            <div>
              <p className="text-4xl font-bold text-white tabular-nums">1+</p>
              <p className="text-white/40 text-xs mt-1 uppercase font-mono">Years Experience</p>
            </div>
            <div className="w-px bg-white/[0.08]" aria-hidden="true" />
            <div>
              <p className="text-4xl font-bold text-white tabular-nums">15+</p>
              <p className="text-white/40 text-xs mt-1 uppercase font-mono">Shipped Projects</p>
            </div>
            <div className="w-px bg-white/[0.08]" aria-hidden="true" />
            <div>
              <p className="text-4xl font-bold text-white tabular-nums">100%</p>
              <p className="text-white/40 text-xs mt-1 uppercase font-mono">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
