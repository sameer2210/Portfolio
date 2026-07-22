"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { motion } from "framer-motion";
import {
  AboutSkeleton,
  ExperienceSkeleton,
  SkillsSkeleton,
  ProjectsSkeleton,
  TestimonialsSkeleton,
} from "@/components/ui/Skeleton";

const About = dynamic(() => import("@/components/About"), {
  loading: () => <AboutSkeleton />,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <ExperienceSkeleton />,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SkillsSkeleton />,
  ssr: false,
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  loading: () => <ProjectsSkeleton />,
});

const AppProjects = dynamic(() => import("@/components/AppProjects"), {
  loading: () => <ProjectsSkeleton />,
});

const Approach = dynamic(() => import("@/components/Approach"), {
  loading: () => <div className="py-20 h-64 animate-pulse" />,
});

const Clients = dynamic(() => import("@/components/Client"), {
  loading: () => <TestimonialsSkeleton />,
});

const FaqSection = dynamic(() => import("@/components/FaqSection"), {
  loading: () => <div className="py-20 h-64 animate-pulse" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-64" />,
});

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomeContent() {
  return (
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />

      <Hero />

      <Reveal>
        <Suspense fallback={<AboutSkeleton />}>
          <About />
        </Suspense>
      </Reveal>

      <Reveal>
        <Suspense fallback={<ExperienceSkeleton />}>
          <Experience />
        </Suspense>
      </Reveal>

      <Reveal>
        <Suspense fallback={<SkillsSkeleton />}>
          <Skills />
        </Suspense>
      </Reveal>

      <Reveal>
        <Suspense fallback={<ProjectsSkeleton />}>
          <RecentProjects />
        </Suspense>
      </Reveal>

      <Reveal>
        <Suspense fallback={<ProjectsSkeleton />}>
          <AppProjects />
        </Suspense>
      </Reveal>

      <Reveal>
        <Suspense fallback={<div className="py-20 h-64" />}>
          <Approach />
        </Suspense>
      </Reveal>

      <Reveal>
        <Suspense fallback={<TestimonialsSkeleton />}>
          <Clients />
        </Suspense>
      </Reveal>

      <Reveal>
        <Suspense fallback={<div className="py-20 h-64" />}>
          <FaqSection />
        </Suspense>
      </Reveal>

      <Reveal>
        <Suspense fallback={<div className="h-64" />}>
          <Footer />
        </Suspense>
      </Reveal>
    </div>
  );
}
