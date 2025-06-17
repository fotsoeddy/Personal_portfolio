import { useState } from 'react';
import { motion, AnimatePresence, stagger } from 'framer-motion';
import Image from 'next/image';
import { workData, assets } from '../../assets/assets'; // Adjust path as needed

const categories = ['All', 'Mobile', 'Website', 'Full Stack', 'SEO', 'AI'];

const Work = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? workData
      : workData.filter((project) => project.category === selectedCategory);

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 1, // Start after header animations
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  // Animation for tech stack icons
  const techIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 1.2, // Start after cards
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  // Animation for "Coming Soon" message
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.8 },
    },
  };

  // Fallback image for project images
  const fallbackImage = '/fallback-image.png'; // Ensure this exists in public/

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className={`w-full px-4 md:px-[12%] py-10 scroll-mt-20 ${
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
        className="flex justify-center mb-10"
      >
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 w-max">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-Ovo transition duration-300 whitespace-nowrap ${
                selectedCategory === category
                  ? isDarkMode
                    ? 'bg-white text-[#11001F]'
                    : 'bg-[#11001F] text-white'
                  : isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-400 text-gray-700 hover:bg-gray-200'
              } ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Project Grid or Coming Soon */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  transition: { duration: 0.3 },
                }}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  isDarkMode
                    ? 'bg-gray-800 hover:shadow-white/20'
                    : 'bg-gray-100 hover:shadow-black/20'
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={typeof project.bgImage === 'string' ? project.bgImage : fallbackImage}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority={index === 0}
                    />
                  </motion.div>
                </div>
                {/* Project Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-Ovo font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {project.category}
                  </p>
                  <p
                    className={`text-sm mb-4 font-Ovo ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {project.description}
                  </p>
                  {/* Tech Stack */}
                  <motion.div
                    className="flex gap-2 mb-4 flex-wrap"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {project.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={techIconVariants}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Image src={tech} alt="Tech icon" width={24} height={24} />
                      </motion.div>
                    ))}
                  </motion.div>
                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-Ovo transition duration-300 ${
                        isDarkMode
                          ? 'bg-white text-[#11001F] hover:bg-gray-200'
                          : 'bg-[#11001F] text-white hover:bg-gray-800'
                      }`}
                      aria-label={`Preview ${project.title}`}
                    >
                      Preview
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="ml-2"
                      >
                        <Image
                          src={isDarkMode ? assets.right_arrow : assets.right_arrow_white}
                          alt="Arrow"
                          width={16}
                          height={16}
                        />
                      </motion.div>
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-Ovo transition duration-300 border ${
                        isDarkMode
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                          : 'border-gray-400 text-gray-700 hover:bg-gray-200'
                      }`}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <motion.div
                        whileHover={{ x: -4 }}
                        transition={{ duration: 0.2 }}
                        className="mr-2"
                      >
                        <Image
                          src={isDarkMode ? assets.github_color : assets.github_icon_black}
                          alt="GitHub"
                          width={16}
                          height={16}
                        />
                      </motion.div>
                      View on GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center h-[400px]"
          >
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Image
                  src={assets.hand_icon}
                  alt="Hand icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
              </motion.div>
              <h3
                className={`text-4xl md:text-5xl font-Ovo font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}
              >
                Coming Soon
              </h3>
              <p
                className={`text-lg md:text-xl mt-4 font-Ovo ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                A Turing design is in development to showcase {selectedCategory} projects
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Work;