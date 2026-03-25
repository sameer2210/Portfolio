import HomeContent from '@/components/HomeContent';
import { sameAsLinks, siteConfig, siteUrl } from '@/lib/seo';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  jobTitle: 'Full Stack Web Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhopal',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  email: `mailto:${siteConfig.email}`,
  sameAs: sameAsLinks,
  knowsAbout: [
    'MERN Stack',
    'Next.js',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'TypeScript',
    'REST API Development',
  ],
  description: siteConfig.description,
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.siteName,
  url: siteUrl,
  inLanguage: 'en-IN',
  author: {
    '@type': 'Person',
    name: siteConfig.name,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <main className="bg-black relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <HomeContent />
      </main>
    </>
  );
}
