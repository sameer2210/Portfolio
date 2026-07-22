"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaLocationArrow, FaCode } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";

const TypewriterEffect = dynamic(
  () => import("./ui/TypewriterEffect").then((mod) => mod.TypewriterEffect),
  {
    loading: () => (
      <p className="text-center md:text-5xl lg:text-6xl my-5 font-bold text-white">
        Building Scalable Production Applications
      </p>
    ),
  }
);

const Hero = () => {
  const words = [
    {
      text: "Architecting",
    },
    {
      text: "Scalable",
      className: "text-purple dark:text-purple",
    },
    {
      text: "&",
    },
    {
      text: "Performant",
      className: "text-purple dark:text-purple",
    },
    {
      text: "Systems",
    },
  ];

  return (
    <header id="home" className="pb-20 pt-36 relative w-full">
      {/* Full-bleed viewport background container (spans 100vw edge to edge) */}
      <div className="w-screen min-h-[100svh] absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-[100svh]"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80svh]" fill="purple" />
        <Spotlight
          className="top-28 left-80 h-[80svh] w-[50vw]"
          fill="#87CEEB"
        />
        <Spotlight
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[40svh] w-[30vw]"
          fill="white"
        />

        <div className="min-h-[100svh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.08] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      <div className="flex justify-center relative my-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[89vw] md:max-w-3xl lg:max-w-[65vw] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-lg font-mono bg-purple/10 border border-purple/20 px-4 py-1.5 rounded-full mb-2"
          >
            Full Stack Developer &amp; Software Engineer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mt-4 tracking-tight text-white"
          >
            Sameer Khan
          </motion.h1>

          <span className="sr-only">
            Sameer Khan — Full Stack Developer &amp; Software Engineer specializing in React, Next.js, Node.js, NestJS, Java, MERN, AWS, and Docker.
          </span>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            aria-hidden="true"
          >
            <TypewriterEffect
              className="text-center md:text-5xl lg:text-6xl my-5"
              words={words}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="speakable-bio text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            Engineering end-to-end web &amp; mobile solutions with{" "}
            <span className="text-purple font-semibold">
              React, Next.js, Node.js, NestJS, Java &amp; AWS
            </span>
            . Specialized in MERN stack, REST APIs, Microservices, and Clean Architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto"
          >
            <a href="#projects" className="cursor-pointer w-full sm:w-auto">
              <MagicButton
                title="Explore Featured Work"
                icon={<FaLocationArrow />}
                position="right"
                as="span"
              />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1gFWOYpLKE1Ppj7HpTV_lKFuqpDn2O2wY?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-full sm:w-auto"
            >
              <MagicButton
                title="View Resume"
                icon={<FaCode />}
                position="left"
                as="span"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
