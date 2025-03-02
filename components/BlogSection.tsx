'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import BlogCard from './BlogCard';
import { Blog } from '@/types';
import { blogServices } from '../services/blog';

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    blogServices.getBlogs(3, 1)
      .then(response => setBlogs(response.data))
      .catch(() => {
        setError('Blog verileri alınırken hata oluştu.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="py-24 px-4 md:px-8 text-center">Yükleniyor...</div>;
  if (error) return <div className="py-24 px-4 md:px-8 text-center text-red-600">{error}</div>;

  return (
    <section id="blog" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[2.5rem] font-bold mb-16 text-center"
        >
          Son Blog Yazıları
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blogs.map((blog: Blog, index: number) => (
            <BlogCard key={index} blog={blog} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors text-gray-700 font-medium"
          >
            Tüm Yazıları Gör
          </Link>
        </motion.div>
      </div>
    </section>
  );
}