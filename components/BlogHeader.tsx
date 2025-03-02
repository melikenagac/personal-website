import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { La_Belle_Aurore } from 'next/font/google';

import { useReadingTime } from '@/hooks';
import { BlogHeaderProps } from '@/types';

const font = La_Belle_Aurore({
  subsets: ['latin'],
  weight: ['400'],
});

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  contentLength,
  featuredImage,
  publishedDate,
}) => {
  const authorText = "written by Melike Nağaç";
  return (
    <>
      <header className="w-full px-4 py-6 flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-32">
        <div className="mt-2 flex flex-col items-center gap-4">
          <h1 className="mt-4 text-3xl lg:text-6xl font-bold text-center">{title}</h1>
          <div>
            <span className="text-gray-600 text-sm">{publishedDate.split('T')[0]}</span>
            <span className="mx-2 text-gray-600 text-sm">•</span>
            <span className="text-gray-600 text-sm">{useReadingTime(contentLength)} min reading</span>
          </div>
          <span
            className={`text-xl lg:text-2xl text-primary leading-normal block ${font.className}`}
          >
            {
              authorText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))
            }
          </span>
        </div>
        {featuredImage &&
          <div className="w-[400px] relative h-[400px] lg:h-[40vh]">
            <Image
              src={featuredImage}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        }
      </header>
    </>
  );
};

export default BlogHeader;