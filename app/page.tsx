import Approach from '@/components/Approach';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import Skills from '@/components/Skills';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import { sameAsLinks, siteConfig, siteUrl } from '@/lib/seo';
import Clients from '../components/Client';

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
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />

          <Hero />

          <Grid />

          <Skills />

          <RecentProjects />

          <Experience />

          <Approach />

          <Clients />

          <Footer />
        </div>
      </main>
    </>
  );
}
