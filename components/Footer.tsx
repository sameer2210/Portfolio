import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";

const Footer = () => {
  return (
    <footer className="relative w-full mb-[100px] md:mb-5 pb-10" id="contact">
      {/* Spotlights */}
      <div>
        <Spotlight className="h-[100svh]" fill="grey" />
        <Spotlight className="left-full h-[80svh]" fill="violet" />
        <Spotlight className="left-80 h-[80svh] w-[50vw]" fill="#87CEEB" />
      </div>

      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-[-1]">
        <Image
          src="/footer-grid.svg"
          alt="footer background grid"
          fill
          className="w-full h-full opacity-100 object-cover"
          sizes="100vw"
        />
      </div>

      {/* Contact CTA */}
      <div className="flex flex-col items-center text-center px-4">
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> software system to the next level?
        </h2>
        <p className="text-white/70 md:mt-6 my-5 max-w-xl text-base">
          Whether you need a full-stack web application, high-performance REST API architecture, or mobile solution — let&apos;s build it together.
        </p>
        <a
          href="mailto:sameerkhanorigin@gmail.com"
          aria-label="Send an email to Sameer Khan"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple rounded-lg"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            as="span"
          />
        </a>
      </div>

      {/* Social Media Section */}
      <div className="mt-16 flex flex-col items-center border-t border-white/10 pt-8">
        <h3 className="text-white/50 text-xs mb-4 uppercase tracking-widest font-mono">
          Connect With Sameer Khan
        </h3>
        <div className="flex items-center gap-6 mb-6">
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label={`Visit Sameer Khan on ${item.name}`}
              title={item.name}
              className="hover:scale-110 transition-transform p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
            >
              <Image
                src={item.img}
                alt={`${item.name} icon`}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>

        {/* Deep Internal Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 mb-4 max-w-2xl text-center">
          <Link href="/" className="hover:text-purple transition-colors">Home</Link>
          <Link href="/#about" className="hover:text-purple transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-purple transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-purple transition-colors font-medium text-white">Technical Blog</Link>
          <Link href="/projects/spandavidya-ai" className="hover:text-purple transition-colors">SpandaVidya AI</Link>
          <Link href="/projects/codex" className="hover:text-purple transition-colors">CodeX IDE</Link>
          <Link href="/projects/filehive" className="hover:text-purple transition-colors">FileHive</Link>
          <Link href="/#faq" className="hover:text-purple transition-colors">FAQ</Link>
          <a href="/sitemap.xml" className="hover:text-purple transition-colors">Sitemap</a>
          <a href="/rss.xml" className="hover:text-purple transition-colors">RSS Feed</a>
        </div>

        <p className="text-xs text-white/30 text-center font-mono">
          &copy; {new Date().getFullYear()} Sameer Khan. All rights reserved. Full Stack Developer &amp; Software Engineer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
