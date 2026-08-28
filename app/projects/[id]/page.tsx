import { appProjects, ProjectDetail, projects } from '@/data';
import { siteConfig, siteUrl } from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FaArrowLeft,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
  FaLightbulb,
  FaLock,
  FaRocket,
  FaServer,
  FaShieldAlt,
} from 'react-icons/fa';

const allProjects: ProjectDetail[] = [...projects, ...appProjects];

function getProject(idOrSlug: string): ProjectDetail | undefined {
  return allProjects.find(
    (p) => p.slug === idOrSlug || p.id.toString() === idOrSlug
  );
}

export async function generateStaticParams() {
  const params: { id: string }[] = [];
  allProjects.forEach((p) => {
    params.push({ id: p.slug });
    params.push({ id: p.id.toString() });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = getProject(params.id);
  if (!project) return {};

  const title = `${project.title} — Software Architecture Case Study | Sameer Khan`;
  const description = `${project.title}: ${project.des} System architecture, database design, and performance engineering by Sameer Khan.`;
  const canonicalUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      `${project.title} Case Study`,
      `${project.title} Architecture`,
      ...project.techStackDetailed,
      'Sameer Khan Portfolio',
      'Software Architecture',
    ],
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: `${siteUrl}${project.img}`,
          width: 1200,
          height: 630,
          alt: `${project.title} project architecture showcase`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [`${siteUrl}${project.img}`],
    },
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${siteUrl}/projects/${project.slug}#software`,
    name: project.title,
    description: project.des,
    url: `${siteUrl}/projects/${project.slug}`,
    image: `${siteUrl}${project.img}`,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, iOS, Android',
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteUrl,
    },
  };

  const softwareSourceCodeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    '@id': `${siteUrl}/projects/${project.slug}#code`,
    name: project.title,
    codeRepository: project.github || `${siteUrl}/projects/${project.slug}`,
    programmingLanguage: project.techStackDetailed,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteUrl,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: `${siteUrl}/#projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${siteUrl}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-16 py-12 max-w-6xl mx-auto selection:bg-purple selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSourceCodeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Back Navigation */}
      <nav aria-label="Breadcrumb navigation" className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-purple hover:text-white transition-colors duration-200"
        >
          <FaArrowLeft /> Back to Portfolio Projects
        </Link>
      </nav>

      {/* Hero Header */}
      <header className="mb-12">
        <div className="inline-block px-3 py-1 bg-purple/10 border border-purple/30 text-purple text-xs font-mono rounded-full mb-4">
          {project.category} Engineering Deep-Dive
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
          {project.des}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple text-white rounded-lg font-medium hover:bg-purple/90 transition-all duration-200 shadow-lg shadow-purple/25"
            >
              <FaExternalLinkAlt /> Launch Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-all duration-200"
            >
              <FaGithub /> View GitHub Repository
            </a>
          )}
        </div>
      </header>

      {/* Main Image Showcase */}
      <div className="relative w-full h-64 sm:h-[450px] rounded-2xl overflow-hidden border border-white/10 mb-16 bg-white/[0.02]">
        <Image
          src={project.img}
          alt={`${project.title} system architecture showcase screenshot`}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-contain p-4"
        />
      </div>

      {/* Performance Metrics Bar */}
      {project.performanceMetrics && project.performanceMetrics.length > 0 && (
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 border-y border-white/10 py-8">
          {project.performanceMetrics.map((metric, i) => (
            <div key={i} className="text-center p-4 bg-white/[0.02] rounded-xl border border-white/5">
              <p className="text-3xl font-bold text-purple tabular-nums">{metric.value}</p>
              <p className="text-xs uppercase font-mono tracking-wider text-white/50 mt-1">{metric.label}</p>
            </div>
          ))}
        </section>
      )}

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          {/* Executive Overview */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaCode className="text-purple" /> Executive Overview
            </h2>
            <p className="text-white/70 leading-relaxed text-base">
              {project.overview}
            </p>
          </section>

          {/* Problem Statement */}
          {project.problemStatement && (
            <section className="p-6 bg-white/[0.02] rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <FaLightbulb className="text-amber-400" /> Problem Statement & Objective
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                {project.problemStatement}
              </p>
            </section>
          )}

          {/* System Architecture */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaServer className="text-purple" /> System Architecture & Data Flow
            </h2>
            <p className="text-white/70 leading-relaxed text-base">
              {project.architecture}
            </p>
          </section>

          {/* Database Design */}
          {project.databaseDesign && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaDatabase className="text-purple" /> Database Design & Schemas
              </h2>
              <p className="text-white/70 leading-relaxed text-base">
                {project.databaseDesign}
              </p>
            </section>
          )}

          {/* Key Engineering Features */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaRocket className="text-purple" /> Key Engineering Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <FaCheckCircle className="text-purple shrink-0 mt-1" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="bg-white/[0.02] p-6 rounded-2xl border border-white/10 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-amber-400" /> Primary Engineering Challenge
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{project.challenges}</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> Implemented Technical Solution
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{project.solutions}</p>
            </div>
          </section>

          {/* Security & Scalability */}
          {(project.security || project.scalability) && (
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.security && (
                <div className="p-5 border border-white/10 rounded-xl bg-white/[0.01]">
                  <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <FaLock className="text-purple" /> Security Controls
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">{project.security}</p>
                </div>
              )}
              {project.scalability && (
                <div className="p-5 border border-white/10 rounded-xl bg-white/[0.01]">
                  <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <FaServer className="text-purple" /> Scalability Strategy
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">{project.scalability}</p>
                </div>
              )}
            </section>
          )}

          {/* Lessons Learned & Future Roadmap */}
          {(project.lessonsLearned || project.futureRoadmap) && (
            <section className="space-y-6 border-t border-white/10 pt-8">
              {project.lessonsLearned && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Key Technical Takeaways</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{project.lessonsLearned}</p>
                </div>
              )}
              {project.futureRoadmap && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Future Roadmap & Improvements</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{project.futureRoadmap}</p>
                </div>
              )}
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Tech Stack Pills */}
          <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/10">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white/40 mb-4">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStackDetailed.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-purple/10 border border-purple/20 text-purple text-xs font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/10">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white/40 mb-2">
              Business &amp; User Impact
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {project.businessImpact}
            </p>
          </div>

          {/* Contact CTA */}
          <div className="p-6 bg-gradient-to-br from-purple/20 to-black rounded-2xl border border-purple/30 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Interested in this stack?</h3>
            <p className="text-xs text-white/60 mb-4">
              Sameer Khan is available for full-stack software development and systems engineering.
            </p>
            <a
              href="mailto:sameerkhanorigin@gmail.com"
              className="inline-block w-full py-2.5 bg-purple text-white text-sm font-medium rounded-lg hover:bg-purple/90 transition-colors"
            >
              Contact Sameer Khan
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
