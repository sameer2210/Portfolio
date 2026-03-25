"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

const Grid = dynamic(() => import("@/components/Grid"), {
  loading: () => <SectionFallback minHeight="22rem" label="Loading profile overview..." />,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SectionFallback minHeight="24rem" label="Loading skills..." />,
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  loading: () => <SectionFallback minHeight="30rem" label="Loading projects..." />,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <SectionFallback minHeight="24rem" label="Loading experience..." />,
});

const Approach = dynamic(() => import("@/components/Approach"), {
  loading: () => <SectionFallback minHeight="24rem" label="Loading approach..." />,
});

const Clients = dynamic(() => import("@/components/Client"), {
  loading: () => <SectionFallback minHeight="20rem" label="Loading testimonials..." />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <SectionFallback minHeight="16rem" label="Loading contact section..." />,
});

function SectionFallback({ minHeight, label }: { minHeight: string; label: string }) {
  return (
    <div className="w-full flex items-center justify-center" style={{ minHeight }}>
      <p className="text-sm text-white-100">{label}</p>
    </div>
  );
}

export default function HomeContent() {
  return (
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />

      <Hero />

      <Grid />

      <Skills />

      <RecentProjects />

      <Experience />

      <Approach />

      <Clients />

      <Footer />
    </div>
  );
}
