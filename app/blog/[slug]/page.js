'use client';

import { assets, blogData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useState, useEffect, use } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';

export default function BlogPost({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { slug } = params;
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const post = blogData.find(b => b.slug === slug);

  if (!post) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center dark:bg-darkTheme dark:text-white'>
        <h1 className='text-4xl font-Ovo mb-4'>Post Not Found</h1>
        <Link href="/blog" className='text-purple-600 hover:underline'>Back to Blog</Link>
      </div>
    );
  }

  // Recommended blogs (exclude current)
  const recommended = blogData
    .filter(b => b.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className='min-h-screen dark:bg-darkTheme dark:text-white'>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Article Header */}
      <div className={`pt-32 pb-16 px-[12%] ${isDarkMode ? 'bg-[#110826]' : 'bg-gray-50'}`}>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex items-center gap-4 mb-6'>
               <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border ${
                isDarkMode 
                  ? 'border-purple-500/30 bg-purple-900/40 text-purple-300' 
                  : 'border-purple-100 bg-purple-50 text-purple-700'
              }`}>
                {post.category}
              </span>
              <span className='text-sm text-gray-500'>{post.date}</span>
            </div>
            
            <h1 className='text-4xl md:text-6xl font-Ovo font-bold mb-8 leading-tight'>
              {post.title}
            </h1>

            <div className='flex items-center gap-4 border-t border-gray-200 dark:border-white/10 pt-8'>
               <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${isDarkMode ? 'bg-purple-900/40' : 'bg-white shadow-sm'}`}>
                  👤
               </div>
               <div>
                  <p className='font-Ovo text-lg font-semibold'>{post.author}</p>
                  <p className='text-sm text-gray-500'>Software Engineer & DevOps</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className='px-[12%] py-16'>
        <div className='max-w-4xl mx-auto'>
           <div className={`text-[120px] mb-12 flex justify-center p-20 rounded-3xl ${isDarkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
              {post.emoji}
           </div>

           <div className='prose prose-lg dark:prose-invert max-w-none font-Ovo text-lg leading-relaxed space-y-8'>
              <p className='text-xl italic font-medium border-l-4 border-purple-500 pl-6 py-2'>
                {post.description}
              </p>
              
              <p>
                In today's fast-paced tech landscape, staying ahead means mastering both development and the operations that support it. This article explores the core concepts of <strong>{post.title}</strong> and how it impacts modern engineering workflows.
              </p>

              <h2 className='text-3xl font-bold mt-12 mb-6'>The Importance of {post.category}</h2>
              <p>
                The shift towards {post.category.toLowerCase()} practices has revolutionized how we think about scale, reliability, and speed. Whether you're a frontend wizard or a backend architect, understanding these fundamentals is crucial for any developer in 2026.
              </p>

              <div className={`p-8 rounded-2xl my-12 ${isDarkMode ? 'bg-[#1a0b2e] border border-white/5' : 'bg-purple-50 border border-purple-100'}`}>
                <h3 className='text-2xl font-bold mb-4'>Key Takeaways</h3>
                <ul className='list-disc pl-6 space-y-4'>
                  <li>Efficiency through automation and best practices.</li>
                  <li>Scalability built into the core architecture.</li>
                  <li>Security as a primary consideration, not an afterthought.</li>
                  <li>Seamless integration between components and services.</li>
                </ul>
              </div>

              <p>
                As we continue to evolve our tools and methodologies, the boundary between "the code" and "the server" vanishes. We are moving towards a world where developers own the entire lifecycle of their applications.
              </p>
           </div>

           {/* Back to Blog */}
           <div className='mt-20 pt-10 border-t border-gray-200 dark:border-white/10'>
              <Link href="/blog" className={`flex items-center gap-2 font-Ovo text-lg transition-all duration-300 ${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-[#11001F] hover:text-purple-700'}`}>
                 <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt='' className='w-4 rotate-180' />
                 Back to Blog
              </Link>
           </div>
        </div>
      </div>

      {/* Recommended Reading */}
      <div className={`py-20 px-[12%] ${isDarkMode ? 'bg-[#110826]/50' : 'bg-gray-50'}`}>
        <div className='max-w-6xl mx-auto'>
           <h2 className='text-3xl font-Ovo mb-12 text-center'>Recommended Reading</h2>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {recommended.map((item, index) => (
                <motion.div
                  key={item.slug}
                  whileHover={{ y: -6 }}
                  className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-[#1a0b2e] border-gray-800'
                      : 'bg-white border-gray-100 shadow-sm'
                  }`}
                >
                  <Link href={`/blog/${item.slug}`}>
                    <div className={`h-40 flex items-center justify-center text-5xl ${isDarkMode ? 'bg-[#110826]' : 'bg-gray-100'}`}>
                      {item.emoji}
                    </div>
                    <div className='p-6'>
                       <p className='text-[10px] uppercase font-bold tracking-widest text-purple-600 mb-2'>{item.category}</p>
                       <h3 className='text-lg font-bold font-Ovo mb-2 group-hover:text-purple-600 transition-colors'>{item.title}</h3>
                       <p className='text-sm text-gray-500 dark:text-gray-400 line-clamp-2'>{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
           </div>
        </div>
      </div>

      <Newsletter isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
