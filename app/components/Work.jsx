import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { workData, assets } from '../../assets/assets'; // Adjust path as needed

const categories = ['All', 'Mobile', 'Website', 'Full Stack', 'SEO', 'AI'];

const Work = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default: 3 slides
  const [isClient, setIsClient] = useState(false); // Track client-side rendering
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? workData
      : workData.filter((project) => project.category === selectedCategory);

  // Set isClient to true on mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update slidesToShow based on window width (client-side only)
  useEffect(() => {
    if (!isClient) return; // Skip on server

    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet
      } else {
        setSlidesToShow(3); // Desktop
      }
    };
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, [isClient]);

  // Reset currentIndex when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Auto-scroll when in view
  useEffect(() => {
    if (!isInView || filteredProjects.length <= slidesToShow) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= filteredProjects.length - slidesToShow ? 0 : prev + 1
      );
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [isInView, filteredProjects.length, slidesToShow]);

  // Handle navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - slidesToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= filteredProjects.length - slidesToShow ? 0 : prev + 1
    );
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Compute drag constraints dynamically
  const getDragConstraints = () => {
    if (!isClient) return { left: 0, right: 0 }; // Fallback for server
    const slideWidth = (window.innerWidth * (100 / slidesToShow + 2)) / 100;
    const maxDrag = (filteredProjects.length - slidesToShow) * slideWidth;
    return { left: -maxDrag, right: 0 };
  };

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
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
        delay: i * 0.1 + 0.7,
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

  // Fallback image
  const fallbackImage = '/fallback-image.png';

  return (
    <motion.div
      ref={sectionRef}
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
              role="button"
              aria-label={`Filter by ${category}`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Project Carousel or Coming Soon */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div
                ref={carouselRef}
                drag="x"
                dragConstraints={getDragConstraints()}
                animate={{
                  x: `-${currentIndex * (100 / slidesToShow + 2)}%`,
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                className="flex"
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
                    className={`flex-shrink-0 w-[calc(100%-24px)] sm:w-[calc(50%-24px)] lg:w-[calc(33.33%-24px)] px-3 ${
                      isDarkMode
                        ? 'bg-gray-800 hover:shadow-white/20'
                        : 'bg-gray-100 hover:shadow-black/20'
                    } rounded-lg overflow-hidden shadow-lg`}
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
                          visible: { transition: { staggerChildren: 0.1 } },
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
            </div>

            {/* Navigation Buttons */}
            {filteredProjects.length > slidesToShow && (
              <div className="flex justify-between mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-[#11001F]'
                  }`}
                  aria-label="Previous slide"
                >
                  <Image
                    src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
                    alt="Previous"
                    width={16}
                    height={16}
                    className="rotate-180"
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-[#11001F]'
                  }`}
                  aria-label="Next slide"
                >
                  <Image
                    src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
                    alt="Next"
                    width={16}
                    height={16}
                  />
                </motion.button>
              </div>
            )}

            {/* Navigation Dots */}
            {filteredProjects.length > slidesToShow && (
              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: filteredProjects.length - slidesToShow + 1 }).map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index
                        ? isDarkMode
                          ? 'bg-white'
                          : 'bg-[#11001F]'
                        : isDarkMode
                        ? 'bg-gray-500'
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
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