import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { siteConfig, siteUrl, targetKeywords } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder";
const bingSiteVerification = process.env.BING_SITE_VERIFICATION || "bing-site-verification-placeholder";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Sameer Khan - Full Stack Developer",
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${siteUrl}/rss.xml`,
    },
  },
  keywords: targetKeywords,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.siteName,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Sameer Khan - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteUrl}/twitter-image`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: googleSiteVerification,
    other: {
      "msvalidate.01": bingSiteVerification,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="author" href={`${siteUrl}/humans.txt`} />
        <link rel="help" href={`${siteUrl}/security.txt`} />
      </head>
      <body className={`${inter.variable} ${inter.className} bg-black text-white antialiased selection:bg-purple selection:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
