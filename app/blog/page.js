'use client';

import { assets, blogData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const categories = ['All', ...new Set(blogData.map(b => b.category))];
  const filtered = activeCategory === 'All'
    ? blogData
    : blogData.filter(b => b.category === activeCategory);

  return (
    <div className='min-h-screen dark:bg-darkTheme dark:text-white'>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Banner */}
      <div className='relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop'
          alt='Blog Banner'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/65 backdrop-blur-[2px]' />
        <div className='relative z-10 text-center text-white px-4'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='text-4xl md:text-6xl font-Ovo font-bold mb-4'
          >
            Blog & Articles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className='text-white/80 font-Ovo text-base md:text-lg max-w-xl mx-auto'
          >
            Thoughts on software engineering, DevOps, and building at scale.
          </motion.p>
        </div>
      </div>

      <div className='px-[12%] py-16'>
        {/* Category Filters */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
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
        </div>

        {/* Blog Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <AnimatePresence mode='popLayout'>
            {filtered.map((post, index) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-[#1a0b2e] border-gray-800 hover:border-purple-500/50'
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Cover */}
                <div className={`h-44 flex items-center justify-center text-5xl ${
                  isDarkMode ? 'bg-[#110826]' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}>
                  {post.emoji}
                </div>

                <div className='p-6'>
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
                  <p className={`text-sm font-Ovo line-clamp-3 mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-[#11001F] hover:text-purple-700'
                    }`}
                  >
                    Read article
                    <Image
                      src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
                      alt=''
                      width={14}
                      height={14}
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className='text-center py-20 text-gray-400 font-Ovo'>
            No articles found in this category yet.
          </div>
        )}
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
