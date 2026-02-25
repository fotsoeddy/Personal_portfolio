'use client';

import { assets, blogData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Blog = ({ isDarkMode }) => {
  const categories = ['All', ...new Set(blogData.map(b => b.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = blogData
    .filter(b => activeCategory === 'All' || b.category === activeCategory)
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='blog'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        From My Desk
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Latest Articles
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo text-base'
      >
        Thoughts on software engineering, DevOps, and building products.
      </motion.p>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='flex flex-wrap justify-center gap-3 mb-12'
      >
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-Ovo border transition-all duration-300 ${
              activeCategory === cat
                ? isDarkMode
                  ? 'bg-white text-black border-white'
                  : 'bg-[#11001F] text-white border-[#11001F]'
                : isDarkMode
                  ? 'border-gray-700 text-gray-400 hover:border-gray-500'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Blog Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
        {filtered.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${
              isDarkMode
                ? 'bg-[#1a0b2e] border-gray-800 hover:border-purple-500/50'
                : 'bg-white border-gray-100 shadow-sm hover:shadow-xl'
            }`}
          >
            {/* Cover image area */}
            <div className={`h-44 flex items-center justify-center text-5xl ${
              isDarkMode ? 'bg-[#110826]' : 'bg-gradient-to-br from-gray-50 to-gray-100'
            }`}>
              {post.emoji}
            </div>

            <div className='p-6'>
              {/* Category + Date */}
              <div className='flex items-center justify-between mb-3'>
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full font-medium ${
                  isDarkMode ? 'bg-purple-900/40 text-purple-300' : 'bg-purple-50 text-purple-700'
                }`}>
                  {post.category}
                </span>
                <span className='text-xs text-gray-400'>{post.date}</span>
              </div>

              <h3 className={`text-lg font-semibold font-Ovo mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {post.title}
              </h3>
              <p className={`text-sm font-Ovo line-clamp-2 mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {post.description}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                  isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-[#11001F] hover:text-purple-700'
                }`}
              >
                Read article
                <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt='' width={14} height={14} className='transition-transform group-hover:translate-x-1' />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All */}
      <div className='flex justify-center'>
        <Link
          href='/blog'
          className={`flex items-center gap-2 px-8 py-2.5 rounded-full border text-sm font-Ovo transition-all duration-300 ${
            isDarkMode ? 'border-white/30 text-white hover:bg-white/5' : 'border-gray-400 text-gray-700 hover:bg-gray-50'
          }`}
        >
          View all articles
          <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt='' width={14} height={14} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Blog;
