'use client';

import { assets, testimonialData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const Testimonials = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='testimonials'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        What My Clients Say
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Testimonials
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-base'
      >
        I take pride in delivering high-quality work that helps my clients succeed. Here is what some of them have to say about our collaborations.
      </motion.p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonialData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
              isDarkMode 
                ? 'bg-[#1a0b2e] border-white/5 hover:border-purple-500/50' 
                : 'bg-white border-gray-100 shadow-sm hover:shadow-lg'
            }`}
          >
            <div className='flex items-center gap-4 mb-6'>
              <div className='relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500'>
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className='object-cover'
                />
              </div>
              <div>
                <h3 className={`font-semibold font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.name}
                </h3>
                <p className='text-xs text-purple-600 font-medium uppercase tracking-wider'>
                  {item.role}
                </p>
              </div>
            </div>

            <div className='relative flex-1'>
               <span className='absolute -top-4 -left-2 text-6xl text-purple-500/10 font-serif'>"</span>
               <p className={`relative z-10 font-Ovo leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.testimonial}
               </p>
            </div>
            
            <div className='flex gap-1 mt-6'>
               {[...Array(5)].map((_, i) => (
                 <span key={i} className='text-yellow-500 text-sm'>★</span>
               ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
