import { MetadataRoute } from 'next';
import { appProjects, projects } from '@/data';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  const allProjects = [...projects, ...appProjects];

  const projectEntries = allProjects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...projectEntries,
  ];
}
