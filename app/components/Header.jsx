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
        Hi! I'm Eddy Steve <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
      >
        Software Engineer / DevOps Engineer
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo text-sm text-gray-600 dark:text-gray-400'
      >
        I am a passionate and skilled Full Stack Developer specializing in building dynamic, scalable, and user-friendly web applications. With expertise in React, Next.js, and Django, I bring a comprehensive approach to both front-end and back-end development. Let's collaborate to turn ideas into impactful digital experiences.
      </motion.p>

{/* Social Media Icons */}
<motion.div
  className='flex gap-6 mt-8'
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  {/* GitHub Icon */}
  <motion.a
    href='https://github.com/fotsoeddy'
    target='_blank'
    rel='noopener noreferrer'
    whileHover={{ scale: 1.1, y: -2 }}
    className="p-3 rounded-full bg-gray-500/5 hover:bg-gray-500/10 transition-colors"
  >
    <Image 
      src={isDarkMode ? assets.github_color : assets.github_icon_black} 
      alt='GitHub' 
      width={24} 
      height={24} 
    />
  </motion.a>

  {/* LinkedIn Icon */}
  <motion.a
    href='https://www.linkedin.com/in/fotso-eddy-453a20256/'
    target='_blank'
    rel='noopener noreferrer'
    whileHover={{ scale: 1.1, y: -2 }}
    className="p-3 rounded-full bg-gray-500/5 hover:bg-gray-500/10 transition-colors"
  >
    <Image 
      src={isDarkMode ? assets.linkedin_icon : assets.linkedin_icon_black} 
      alt='LinkedIn' 
      width={24} 
      height={24} 
    />
  </motion.a>

  {/* X (Twitter) Icon */}
  <motion.a
    href='https://x.com/fotsoeddysteve'
    target='_blank'
    rel='noopener noreferrer'
    whileHover={{ scale: 1.1, y: -2 }}
    className="p-3 rounded-full bg-gray-500/5 hover:bg-gray-500/10 transition-colors"
  >
    <Image 
      src={isDarkMode ? assets.x_icon : assets.x_icon_black} 
      alt='X' 
      width={22} 
      height={22} 
    />
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
          href='/fotso_Eddy_CV.pdf'
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