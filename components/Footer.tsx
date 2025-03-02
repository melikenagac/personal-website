'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#000000]">&copy; {new Date().getFullYear()} Melike Nağaç. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
