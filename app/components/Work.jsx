import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { workData, assets } from '../../assets/assets';

const categories = ['All', 'Mobile', 'Website', 'Full Stack', 'SEO', 'AI'];

const Work = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? workData
      : workData.filter((project) => project.category === selectedCategory);

  // Limit projects to 6 for the homepage
  const displayProjects = filteredProjects.slice(0, 6);

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const fallbackImage = '/fallback-image.png';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className={`w-full px-[5%] md:px-[12%] py-16 scroll-mt-20 ${
        isDarkMode ? 'bg-[#11001F]' : 'bg-white'
      }`}
    >
      {/* Portfolio Header */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300"
      >
        I am a passionate and skilled Full Stack Developer specializing in building dynamic, scalable, and user-friendly web applications.
      </motion.p>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex justify-center mb-12"
      >
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 w-max">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <AnimatePresence mode="popLayout">
          {displayProjects.map((project, index) => (
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
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={typeof project.bgImage === 'string' ? project.bgImage : fallbackImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider ${
                    isDarkMode ? 'bg-purple-900/80 text-purple-100' : 'bg-white/90 text-[#11001F]'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-6 font-Ovo line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex gap-2 mb-8 items-center">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="p-1.5 rounded-lg bg-gray-500/10 backdrop-blur-sm">
                      <Image src={tech} alt="Tech" width={18} height={18} />
                    </div>
                  ))}
                </div>

                {/* Project Links */}
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

      {/* View All Button */}
      {filteredProjects.length > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center"
        >
          <Link
            href="/projects"
            className={`flex items-center gap-2 px-10 py-3 rounded-full border border-gray-500 font-Ovo hover:bg-gray-50 dark:hover:bg-[#1a0b2e] transition duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-700'
            }`}
          >
            Show more
            <Image 
              src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} 
              alt="" 
              width={16} 
              height={16} 
            />
          </Link>
        </motion.div>
      )}

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
    </motion.div>
  );
};

export default Work;