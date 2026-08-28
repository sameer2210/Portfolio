import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { siteConfig, siteUrl } from '@/lib/seo';
import { FaCalendarAlt, FaClock, FaTag, FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Technical Blog & Engineering Articles | Sameer Khan',
  description:
    'Deep-dive technical articles, system design tutorials, and software engineering insights by Sameer Khan on Node.js, NestJS, Next.js, Docker, Redis, MERN Stack, and AI.',
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: 'Technical Blog & Engineering Articles | Sameer Khan',
    description:
      'Deep-dive technical articles, system design tutorials, and software engineering insights on Node.js, NestJS, Next.js, Docker, Redis, and AI.',
    url: `${siteUrl}/blog`,
    type: 'website',
  },
};

const blogCollectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${siteUrl}/blog#collection`,
  url: `${siteUrl}/blog`,
  name: 'Sameer Khan Engineering Blog & Technical Articles',
  description:
    'Deep-dive technical articles, system design tutorials, and software engineering insights on Node.js, NestJS, Next.js, Docker, Redis, and AI.',
  author: {
    '@type': 'Person',
    name: siteConfig.name,
    url: siteUrl,
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteUrl}/blog/${post.slug}`,
      name: post.title,
    })),
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
      name: 'Blog',
      item: `${siteUrl}/blog`,
    },
  ],
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-black text-white pt-28 pb-20 px-5 sm:px-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-14 text-center max-w-3xl mx-auto">
          <div className="p-2.5 px-4 bg-purple/10 border border-purple/30 rounded-full text-purple font-mono text-xs uppercase tracking-widest inline-block mb-4">
            /ENGINEERING ARTICLES &amp; SYSTEM DESIGN
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Technical <span className="text-purple">Blog</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Architectural case studies, deep-dive backend tutorials, and practical insights on building production-ready scalable web applications.
          </p>
        </header>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between border border-white/10 rounded-2xl bg-white/[0.02] p-6 hover:border-purple/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-purple bg-purple/10 px-3 py-1 rounded-full border border-purple/20">
                    {post.category}
                  </span>
                  <span className="text-xs text-white/40 flex items-center gap-1.5 font-mono">
                    <FaClock className="text-purple" /> {post.readingTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-purple transition-colors mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1"
                    >
                      <FaTag className="text-purple text-[9px]" /> {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className="text-xs text-white/40 flex items-center gap-1.5 font-mono">
                    <FaCalendarAlt /> {post.publishedAt}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-purple group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <FaArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
