import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl  text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.profile2}
          alt='Profile Image'
          className='rounded-full w-40 h-40 bg-cover mt-20'
        />
      </motion.div>

      {/* Name and Hand Icon */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo'
      >
        Hi! I'm Eddy Steve{' '}
        <Image src={assets.hand_icon} alt='Hand Icon' className='w-6' />
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
      >
        Full Stack Developer Based in Cameroon
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'
      >
        I'm a front-end developer from Bambili, Bamenda.
      </motion.p>

{/* Social Media Icons */}
<motion.div
  className='flex gap-6 mt-6'
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1 }}
>
  {/* GitHub Icon */}
  <motion.a
    href='https://github.com/fotsoeddy'
    target='_blank'
    rel='noopener noreferrer'
    initial={{ scale: 3, y: -50, opacity: 0 }}
    whileInView={{ scale: 1, y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1.2, type: 'spring' }}
    whileHover={{
      scale: 1.2,
      rotate: [0, 10, -10, 0], // Slight wiggle effect
      boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)', // Glow effect
      transition: { duration: 0.3, ease: 'easeInOut' }, // Smooth transition
    }}
  >
    <Image src={assets.github_icon_black} alt='GitHub' width={24} height={24} />
  </motion.a>

  {/* LinkedIn Icon */}
  <motion.a
    href='https://linkedin.com/in/fotsoeddy'
    target='_blank'
    rel='noopener noreferrer'
    initial={{ scale: 3, y: -50, opacity: 0 }}
    whileInView={{ scale: 1, y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1.4, type: 'spring' }}
    whileHover={{
      scale: 1.2,
      rotate: [0, 10, -10, 0], // Slight wiggle effect
      boxShadow: '0px 0px 10px rgba(0, 119, 181, 0.5)', // LinkedIn blue glow
      transition: { duration: 0.3, ease: 'easeInOut' }, // Smooth transition
    }}
  >
    <Image src={assets.linkedin_icon} alt='LinkedIn' width={24} height={24} />
  </motion.a>

  {/* X (Twitter) Icon */}
  <motion.a
    href='https://twitter.com/fotsoeddy'
    target='_blank'
    rel='noopener noreferrer'
    initial={{ scale: 3, y: -50, opacity: 0 }}
    whileInView={{ scale: 1, y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1.6, type: 'spring' }}
    whileHover={{
      scale: 1.2,
      rotate: [0, 10, -10, 0], // Slight wiggle effect
      boxShadow: '0px 0px 10px rgba(29, 161, 242, 0.5)', // Twitter blue glow
      transition: { duration: 0.3, ease: 'easeInOut' }, // Smooth transition
    }}
  >
    <Image src={assets.x_icon} alt='X' width={24} height={24} />
  </motion.a>

  {/* Instagram Icon */}
  <motion.a
    href='https://instagram.com/yourusername'
    target='_blank'
    rel='noopener noreferrer'
    initial={{ scale: 3, y: -50, opacity: 0 }}
    whileInView={{ scale: 1, y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1.8, type: 'spring' }}
    whileHover={{
      scale: 1.2,
      rotate: [0, 10, -10, 0], // Slight wiggle effect
      boxShadow: '0px 0px 10px rgba(225, 48, 108, 0.5)', // Instagram pink glow
      transition: { duration: 0.3, ease: 'easeInOut' }, // Smooth transition
    }}
  >
    <Image src={assets.instagram_icon} alt='Instagram' width={24} height={24} />
  </motion.a>
</motion.div>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href='#contact'
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >
          Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href='/sample-resume.pdf'
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
        >
          My Resume <Image src={assets.download_icon} alt='' className='w-4' />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;