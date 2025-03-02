'use client';
import { motion } from 'framer-motion';
import { La_Belle_Aurore } from 'next/font/google';

const font = La_Belle_Aurore({
  subsets: ['latin'],
  weight: ['400'],
});

const authorText = "by Melike Nağaç";

export default function PageHeader({ title }: { title: string; }) {
  return (
    <section id="home" className="pt-32 pb-12 flex items-start justify-center px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl text-center"
      >
        <motion.h1
          className="leading-tight font-bold"
        >
          <motion.span
            className="text-3xl lg:text-6xl text-[#000000] block mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            {title}
          </motion.span>
        </motion.h1>
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
      </motion.div>
    </section>
  );
}