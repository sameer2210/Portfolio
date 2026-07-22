"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { appProjects } from "@/data";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow, FaBookOpen } from "react-icons/fa";

const getTechName = (path: string) => {
  const file = path.split("/").pop()?.split(".")[0] || "";
  const nameMap: Record<string, string> = {
    js: "JavaScript",
    ts: "TypeScript",
    react: "React Native",
    next: "Next.js",
    nextjs: "Next.js",
    node: "Node.js",
    express: "Express.js",
    mongo: "MongoDB",
    tail: "Tailwind CSS",
    redux: "Redux",
    fm: "Framer Motion",
    docker: "Docker",
    git: "Git",
    github: "GitHub",
    postman: "Postman",
    redis: "Redis",
    aws: "AWS",
    Razorpay: "Razorpay",
    cloudinary: "Cloudinary",
    html: "HTML5",
    css: "CSS3",
    three: "Three.js",
    vite: "Vite",
  };
  return nameMap[file] || file.charAt(0).toUpperCase() + file.slice(1);
};

const AppProjects = () => {
  return (
    <section className="py-10" id="apps">
      <h2 className="heading">
        My featured <span className="text-purple">mobile apps</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-16 sm:gap-y-8">
        {appProjects.map(({ id, slug, title, des, img, iconLists, link }) => (
          <article
            key={id}
            className="min-h-[28rem] sm:min-h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={`/projects/${slug}`}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: '' }}
                >
                  <Image
                    src="/bg.png"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 80vw, 570px"
                    className="object-cover"
                  />
                </div>
                <Image
                  src={img}
                  alt={`${title} app preview`}
                  fill
                  sizes="(max-width: 640px) 80vw, 570px"
                  className="z-10 absolute bottom-0 object-contain"
                />
              </div>

              <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h3>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center flex-wrap gap-2 lg:flex-nowrap lg:gap-0">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden shrink-0 border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center lg:-ml-2 lg:first:ml-0"
                    >
                      <Image
                        src={icon}
                        alt={`${getTechName(icon)} logo`}
                        fill
                        sizes="(max-width: 768px) 32px, 40px"
                        className="p-2 object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 z-20 relative">
                  <Link
                    href={`/projects/${slug}`}
                    className="flex lg:text-base md:text-xs text-sm text-purple hover:underline items-center"
                  >
                    <FaBookOpen className="me-1.5" /> Details
                  </Link>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex lg:text-base md:text-xs text-sm text-white hover:text-purple items-center"
                    >
                      Source <FaLocationArrow className="ms-1.5" color="#CBACF9" />
                    </a>
                  )}
                </div>
              </div>
            </PinContainer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AppProjects;
