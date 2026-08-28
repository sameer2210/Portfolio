import { appProjects, projects } from '@/data';
import { blogPosts } from '@/data/blog';
import { siteConfig, siteUrl } from '@/lib/seo';

export async function GET() {
  const allProjects = [...projects, ...appProjects];

  const projectItemsXml = allProjects
    .map(
      (p) => `
    <item>
      <title><![CDATA[${p.title} - Case Study]]></title>
      <link>${siteUrl}/projects/${p.slug}</link>
      <guid>${siteUrl}/projects/${p.slug}</guid>
      <description><![CDATA[${p.des} Tech Stack: ${p.techStackDetailed.join(', ')}]]></description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>`
    )
    .join('');

  const blogItemsXml = blogPosts
    .map(
      (b) => `
    <item>
      <title><![CDATA[${b.title}]]></title>
      <link>${siteUrl}/blog/${b.slug}</link>
      <guid>${siteUrl}/blog/${b.slug}</guid>
      <description><![CDATA[${b.excerpt}]]></description>
      <pubDate>${new Date(b.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.title}</title>
    <link>${siteUrl}</link>
    <description>${siteConfig.description}</description>
    <language>en-IN</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
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
