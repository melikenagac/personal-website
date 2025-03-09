'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    } else {
      window.location.href = `/#${sectionId}`; // redirect to homepage with hash
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl h-24 mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center">
        <Link href="/" legacyBehavior>
          <a aria-label="Anasayfa">
            <Image src="/logo.svg" alt="Melike Nağaç Logo" width={150} height={50} />
          </a>
        </Link>
        <div className="flex justify-end items-center h-20">
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 focus:outline-none mr-4">
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('anasayfa')} className="text-gray-700 hover:text-[#cb6216] transition-colors">
              Anasayfa
            </button>
            <button onClick={() => scrollToSection('hakkimda')} className="text-gray-700 hover:text-[#cb6216] transition-colors">
              Hakkımda
            </button>
            <button onClick={() => scrollToSection('projeler')} className="text-gray-700 hover:text-[#cb6216] transition-colors">
              Projeler
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-[#cb6216] transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('deneyimler')} className="text-gray-700 hover:text-[#cb6216] transition-colors">
              Deneyimler
            </button>
            <button onClick={() => scrollToSection('iletisim')} className="text-gray-700 hover:text-[#cb6216] transition-colors">
              İletişim
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#cb6216] transition-colors text-left">
              Anasayfa
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#cb6216] transition-colors text-left">
              Hakkımda
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-[#cb6216] transition-colors text-left">
              Projeler
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-[#cb6216] transition-colors text-left">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#cb6216] transition-colors text-left">
              İletişim
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
