import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import { siteConfig, siteUrl } from '@/lib/seo';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag, FaGithub } from 'react-icons/fa';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Sameer Khan',
    };
  }

  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Sameer Khan Blog`,
    description: post.excerpt,
    keywords: post.seoKeywords,
    authors: [{ name: post.author.name, url: siteUrl }],
    creator: post.author.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [siteUrl],
      tags: post.tags,
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: siteConfig.twitterHandle,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const techArticleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${postUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url: postUrl,
    inLanguage: 'en-IN',
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: siteUrl,
      sameAs: [post.author.github],
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteUrl,
    },
    keywords: post.seoKeywords.join(', '),
    articleSection: post.category,
    dependencies: post.tags.join(', '),
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="min-h-screen bg-black text-white pt-28 pb-20 px-5 sm:px-10 max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-purple hover:underline mb-8"
        >
          <FaArrowLeft /> Back to Articles
        </Link>

        {/* Article Meta Header */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono text-purple bg-purple/10 px-3 py-1 rounded-full border border-purple/20">
              {post.category}
            </span>
            <span className="text-xs text-white/40 flex items-center gap-1.5 font-mono">
              <FaCalendarAlt /> {post.publishedAt}
            </span>
            <span className="text-xs text-white/40 flex items-center gap-1.5 font-mono">
              <FaClock /> {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author Card */}
          <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 p-4 rounded-xl">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple/40 shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                {post.author.name}
                <a
                  href={post.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Author GitHub Profile"
                  className="text-white/60 hover:text-purple"
                >
                  <FaGithub />
                </a>
              </p>
              <p className="text-xs text-white/50">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5"
            >
              <FaTag className="text-purple text-xs" /> {tag}
            </span>
          ))}
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-white/80 leading-relaxed text-base sm:text-lg">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
              return (
                <h1 key={index} className="text-3xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">
                  {paragraph.replace('# ', '')}
                </h1>
              );
            }
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-purple mt-8 mb-3">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-2">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('```')) {
              const lines = paragraph.split('\n');
              const language = lines[0].replace('```', '');
              const codeContent = lines.slice(1, -1).join('\n');
              return (
                <div key={index} className="my-6 rounded-xl overflow-hidden border border-white/15 bg-slate-950 font-mono text-sm">
                  {language && (
                    <div className="bg-white/5 px-4 py-1.5 text-xs text-white/40 border-b border-white/10 uppercase tracking-widest">
                      {language}
                    </div>
                  )}
                  <pre className="p-4 overflow-x-auto text-purple-200">
                    <code>{codeContent}</code>
                  </pre>
                </div>
              );
            }
            return (
              <p key={index} className="text-white/80 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold text-white mb-6">Related Engineering Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div key={rel.id} className="border border-white/10 p-5 rounded-xl bg-white/[0.02]">
                  <span className="text-xs font-mono text-purple">{rel.category}</span>
                  <h3 className="text-lg font-bold text-white mt-2 hover:text-purple">
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
