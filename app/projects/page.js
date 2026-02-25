'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { workData, assets } from '../../assets/assets';

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mobile', 'Website', 'Full Stack', 'SEO', 'AI'];

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const filteredProjects =
    selectedCategory === 'All'
      ? workData
      : workData.filter((project) => project.category === selectedCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const fallbackImage = '/fallback-image.png';

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className={`min-h-screen ${isDarkMode ? 'bg-[#11001F]' : 'bg-white'}`}>
        
        {/* Banner Section */}
        <div className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
            alt="Projects Banner" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          
          <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 font-Ovo"
            >
              My Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-Ovo"
            >
              A collection of my work, ranging from web applications to mobile apps and AI systems.
            </motion.p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-[5%] md:px-[8%] py-16">
          
          {/* Category Filters */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-Ovo transition-all duration-300 whitespace-nowrap border ${
                    selectedCategory === category
                      ? isDarkMode
                        ? 'bg-white text-[#11001F] border-white'
                        : 'bg-[#11001F] text-white border-[#11001F]'
                      : isDarkMode
                      ? 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                      : 'border-gray-300 text-gray-600 hover:border-gray-500 hover:text-gray-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                    isDarkMode 
                    ? 'bg-[#1a0b2e] border border-gray-800 hover:border-purple-500/50' 
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl'
                  }`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={typeof project.bgImage === 'string' ? project.bgImage : fallbackImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider ${
                        isDarkMode ? 'bg-purple-900/80 text-purple-100' : 'bg-white/90 text-[#11001F]'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-6 font-Ovo line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>

                    <div className="flex gap-2 mb-8 items-center">
                      {project.tech.map((tech, i) => (
                        <div key={i} className="p-1.5 rounded-lg bg-gray-500/10 backdrop-blur-sm">
                          <Image src={tech} alt="Tech" width={18} height={18} />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={project.previewLink}
                        target="_blank"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                          isDarkMode
                          ? 'bg-white text-black hover:bg-gray-200'
                          : 'bg-[#11001F] text-white hover:bg-black'
                        }`}
                      >
                        Demo
                        <Image src={isDarkMode ? assets.right_arrow : assets.right_arrow_white} alt="" width={12} height={12} />
                      </Link>
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-300 ${
                          isDarkMode
                          ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Image src={isDarkMode ? assets.github_color : assets.github_icon_black} alt="" width={14} height={14} />
                        Github
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Image src={assets.hand_icon} alt="" width={48} height={48} className="mb-4" />
              <h3 className={`text-2xl font-Ovo mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Coming Soon</h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Stay tuned for some amazing {selectedCategory} projects!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
