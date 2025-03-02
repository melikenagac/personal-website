"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Blog } from '@/types';

interface BlogCardProps {
  blog: Blog;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, index }) => {
  return (
    <div
      key={index}
      className="relative p-6 sm:p-8 bg-white border border-secondary border-opacity-20 rounded-lg hover:border-opacity-40 transition-opacity duration-300 group"
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4">
          {blog.title.rendered}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-6">
          {blog.content.rendered.replace(/<[^>]+>/g, '').slice(0, 200)}...
        </p>
        <Link
          href={`/blog/${blog.id}`}
          className="text-secondary hover:text-primary transition-colors inline-flex items-center group"
        >
          Devamını oku
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="ml-2"
          >
            →
          </motion.span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;