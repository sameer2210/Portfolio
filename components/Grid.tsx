'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { gridItems } from '@/data';

// Dynamically import BentoGrid and BentoGridItem with SSR disabled
const BentoGrid = dynamic(() => import('@/components/ui/BentoGrid').then(mod => mod.BentoGrid), {
  ssr: false,
});
const BentoGridItem = dynamic(
  () => import('@/components/ui/BentoGrid').then(mod => mod.BentoGridItem),
  { ssr: false }
);

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          (
            {
              id,
              title,
              titleClassName,
              description,
              link,
              className,
              img,
              imgClassName,
              spareImg,
            },
            i
          ) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              titleClassName={titleClassName}
              description={description}
              link={link}
              className={className}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
