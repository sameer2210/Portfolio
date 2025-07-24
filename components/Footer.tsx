import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full mb-[100px] md:mb-5 pb-10" id="contact">
      {/* Spotlights */}
      <div>
        <Spotlight className="h-screen" fill="grey" />
        <Spotlight className="left-full h-[80vh]" fill="violet" />
        <Spotlight className="left-80 h-[80vh] w-[50vw]" fill="#87CEEB" />
      </div>

      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-[-1]">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100"
        />
      </div>

      {/* Contact CTA */}
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="mailto:sameerkhan27560@gmail.com"
          aria-label="Send an email to Sameer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Social Media Section */}
      <div className="mt-10 flex flex-col items-center">
        <h3 className="text-white-100 text-sm mb-2 uppercase tracking-wide">
          Connect With Me
        </h3>
        <div className="flex items-center gap-6">
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              className="hover:scale-110 transition-transform"
            >
              <img src={item.img} alt={item.name} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
