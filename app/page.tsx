'use client';

import React from 'react';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import RecentWorksSection from '../components/RecentWorksSection';
import ExperienceSection from '../components/ExperienceSection';
import BlogSection from '../components/BlogSection';
import VideoSection from '../components/VideoSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <RecentWorksSection />
      <BlogSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
