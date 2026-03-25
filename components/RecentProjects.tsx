"use client";
import React from "react";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-10" id="projects">
      <h2 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-16 sm:gap-y-8">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="min-h-[28rem] sm:min-h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: '#13162D' }}
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
                  alt={`${title} project preview`}
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
                        alt=""
                        fill
                        sizes="(max-width: 768px) 32px, 40px"
                        className="p-2 object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm ">Live</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
