import { appProjects, projects } from '@/data';
import { blogPosts } from '@/data/blog';
import { siteConfig, siteUrl } from '@/lib/seo';

const escapeXml = (unsafe: string): string =>
  unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const cdata = (content: string): string =>
  `<![CDATA[${content.replace(/\]\]>/g, ']]&gt;<![CDATA[')}]]>`;

export async function GET() {
  const allProjects = [...projects, ...appProjects];

  const projectItemsXml = allProjects
    .map(
      (p) => `
    <item>
      <title>${cdata(`${p.title} - Case Study`)}</title>
      <link>${escapeXml(`${siteUrl}/projects/${p.slug}`)}</link>
      <guid>${escapeXml(`${siteUrl}/projects/${p.slug}`)}</guid>
      <description>${cdata(`${p.des} Tech Stack: ${p.techStackDetailed.join(', ')}`)}</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>`
    )
    .join('');

  const blogItemsXml = blogPosts
    .map(
      (b) => `
    <item>
      <title>${cdata(b.title)}</title>
      <link>${escapeXml(`${siteUrl}/blog/${b.slug}`)}</link>
      <guid>${escapeXml(`${siteUrl}/blog/${b.slug}`)}</guid>
      <description>${cdata(b.excerpt)}</description>
      <pubDate>${new Date(b.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${cdata(siteConfig.title)}</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${cdata(siteConfig.description)}</description>
    <language>en-IN</language>
    <atom:link href="${escapeXml(`${siteUrl}/rss.xml`)}" rel="self" type="application/rss+xml"/>
    ${blogItemsXml}
    ${projectItemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
