'use client';
import animationData from '@/data/confetti.json';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';
import LitupButton from './LitupButton';
import MagicButton from './MagicButton';
import { SparklesCore } from './Sparkles';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  link,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  link?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleCopy = () => {
    const text = 'sameerkhan27560@gmail.com';

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
    }
  };

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className="w-full h-full absolute">
        {img && (
          <Image
            src={img}
            alt={'project screenshot'}
            className={cn(imgClassName, 'object-center')}
            fill
          />
        )}
      </div>
      <div className={`absolute right-0 -bottom-5 ${id === 2 && 'w-full opacity-80'} `}>
        {spareImg && (
          <Image
            src={spareImg}
            alt={'spare image'}
            className="object-cover object-center w-full h-full"
            fill
          />
        )}
      </div>

      <div
        className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}
      >
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>

        <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>{title}</div>

        {id === 1 && (
          <>
            <div className="absolute z-0 w-full h-40 md:h-60 lg:h-80">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            <div className="mt-5 flex flex-col gap-4 z-10 relative">
              <div className="relative">
                <div className={`absolute -bottom-5 right-0 ${copied ? 'block' : 'block'}`}>
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>
                <MagicButton
                  title={copied ? 'Email is Copied!' : 'Copy my email address'}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <LitupButton name="View Resume" />
                </a>
              )}
            </div>
          </>
        )}

        {id === 5 && link && (
          <div className="mt-5 z-10 relative">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <LitupButton name="Visit GitHub" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
