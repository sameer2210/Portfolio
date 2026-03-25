'use client';
import { useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const IconCloud = dynamic(
  () => import('@/components/ui/IconCloud').then(mod => mod.IconCloud),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center w-full h-[320px] md:h-[420px]">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-purple border-t-transparent"></div>
      </div>
    ),
  }
);

const slugs = [
  'typescript',
  'javascript',
  'openjdk',
  'html5',
  'css3',
  'react',
  'nodedotjs',
  'express',
  'nextdotjs',
  'mongodb',
  'vercel',
  'mysql',
  'postgresql',
  'hostinger',
  'docker',
  'git',
  'java',
  'aws',
  'postman',
  'redis',
  'render',
  'github',
  'figma',
  'tailwindcss',
  'redux',
];

function Skills() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { margin: '200px', once: true });

  return (
    <div ref={containerRef} className="my-10 py-10">
      <h2 className="heading">
        Skills &amp; <span className="text-purple">Technologies</span>
      </h2>
      {isInView ? (
        <IconCloud iconSlugs={slugs} />
      ) : (
        <div
          className="flex items-center justify-center w-full h-[320px] md:h-[420px]"
          aria-busy="true"
        >
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-purple border-t-transparent" />
        </div>
      )}
    </div>
  );
}

export default Skills;
