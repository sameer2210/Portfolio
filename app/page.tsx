import HomeContent from '@/components/HomeContent';
import { faqs, projects } from '@/data';
import { sameAsLinks, siteConfig, siteUrl } from '@/lib/seo';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: siteConfig.name,
  givenName: 'Sameer',
  familyName: 'Khan',
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  jobTitle: 'Full Stack Developer & Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Optico Solutions Pvt. Ltd.',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhopal',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  email: `mailto:${siteConfig.email}`,
  sameAs: sameAsLinks,
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'NestJS',
    'Java',
    'MERN Stack',
    'React Native',
    'TypeScript',
    'JavaScript',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'Prisma',
    'Docker',
    'AWS',
    'REST APIs',
    'System Design',
    'Full Stack Web Development',
    'Microservices',
    'Clean Architecture',
    'Performance Optimization',
  ],
  description: siteConfig.description,
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: siteConfig.siteName,
  url: siteUrl,
  inLanguage: 'en-IN',
  author: {
    '@id': `${siteUrl}/#person`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/#projects?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#profilepage`,
  url: siteUrl,
  name: `${siteConfig.name} - Full Stack Developer Portfolio`,
  mainEntity: {
    '@id': `${siteUrl}/#person`,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.speakable-bio'],
  },
};

const portfolioItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${siteUrl}/#portfolio-list`,
  name: 'Sameer Khan Software Engineering Projects',
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: project.title,
      description: project.des,
      url: `${siteUrl}/projects/${project.slug}`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web, iOS, Android',
      author: {
        '@id': `${siteUrl}/#person`,
      },
    },
  })),
};

const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioItemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <main className="bg-black relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <HomeContent />
      </main>
    </>
  );
}
