'use client';
import { IconCloud } from '@/components/ui/IconCloud';

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
  'docker',
  'git',
  'github',
  'figma',
  'tailwindcss',
  'redux',
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
