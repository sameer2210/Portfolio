'use client';
import { IconCloud } from '@/components/ui/IconCloud';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
      <h1 className="heading">
        Skills &amp; <span className="text-purple">Technologies</span>
      </h1>
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
