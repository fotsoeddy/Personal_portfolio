import { assets, experienceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Experience = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='experience'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My Journey
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Here's a look at my professional journey — from full-time roles to freelance work across the globe.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'
      >
        {experienceData.map((exp, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className={`border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white ${
              exp.category === 'Freelance' ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Icon */}
            <div className='mb-4'>
              {exp.category === 'Freelance' ? (
                <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt='' className='w-10' />
              ) : (
                <Image src={isDarkMode ? assets.code_icon_dark : assets.code_icon} alt='' className='w-10' />
              )}
            </div>

            {/* Position & Company */}
            <h3 className='text-lg my-4 text-gray-700 dark:text-white font-semibold'>
              {exp.position}
            </h3>
            <p className='text-sm font-medium text-purple-600 dark:text-purple-400 mb-3'>
              {exp.company}
            </p>

            {/* Description / details */}
            <p className='text-sm text-gray-600 leading-5 dark:text-white/70 mb-4'>
              {exp.description}
            </p>

            {/* Meta info */}
            <div className='mt-4 space-y-1.5 border-t border-gray-200 dark:border-white/10 pt-4'>
              <p className='text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5'>
                <span className='w-1.5 h-1.5 rounded-full bg-green-500 inline-block'></span>
                {exp.duration}
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5'>
                <span className='w-1.5 h-1.5 rounded-full bg-blue-400 inline-block'></span>
                {exp.location} · {exp.country}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Experience
