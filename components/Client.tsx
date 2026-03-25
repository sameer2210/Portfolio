'use client';

// import { companies, testimonials } from "@/data";
import { testimonials } from '@/data';
import { useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const InfiniteMovingCards = dynamic(
  () => import('./ui/InfiniteMovingCards').then(mod => mod.InfiniteMovingCards),
  {
    ssr: false,
    loading: () => <div className="text-sm text-white-100">Loading testimonials...</div>,
  }
);

const Clients = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { margin: '200px', once: true });

  return (
    <section id="testimonials" className="py-20">
      <h2 className="heading">
        Kind words from
        <span className="text-purple"> satisfied Senior Management</span>
      </h2>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          ref={containerRef}
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          {isInView ? (
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
          ) : (
            <div className="text-sm text-white-100">Loading testimonials...</div>
          )}
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Clients;
