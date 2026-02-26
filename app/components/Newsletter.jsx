'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const Newsletter = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='w-full px-[12%] py-20'
    >
      <div className={`rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative ${
        isDarkMode 
          ? 'bg-[#1a0b2e] border border-white/10' 
          : 'bg-[#11001F] text-white shadow-2xl'
      }`}>
        {/* Background Accent */}
        <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[100px] opacity-30 ${
          isDarkMode ? 'bg-purple-600' : 'bg-purple-400'
        }`} />
        
        <div className='flex-1 relative z-10'>
          <h2 className='text-3xl md:text-4xl font-Ovo mb-4'>
            Don't miss a beat.
          </h2>
          <p className={`font-Ovo text-lg ${isDarkMode ? 'text-gray-400' : 'text-white/80'}`}>
            Subscribe to my newsletter to get notified when I publish new articles on software engineering, DevOps, and more.
          </p>
        </div>

        <form className='w-full md:w-auto flex flex-col sm:flex-row gap-4 relative z-10'>
          <div className='relative'>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={`px-6 py-4 rounded-full w-full sm:w-80 outline-none transition-all duration-300 border ${
                isDarkMode 
                  ? 'bg-[#110826] border-white/10 text-white focus:border-purple-500' 
                  : 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20'
              }`}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-10 py-4 rounded-full font-Ovo font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-white text-[#11001F] hover:bg-white/90'
            }`}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Newsletter;
