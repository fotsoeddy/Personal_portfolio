import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const categories = ['All', 'Mobile', 'Website', 'Full Stack', 'SEO', 'AI'];

const Work = ({ isDarkMode }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const textVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.8 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.8,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5
            }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1 }} 
            id='work' 
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h4 
                initial={{ opacity: 0, y: -20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.3 }} 
                className='text-center mb-2 text-lg font-Ovo'
            >
                My Portfolio
            </motion.h4>
            <motion.h2 
                initial={{ opacity: 0, y: -20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.5 }} 
                className='text-center text-5xl font-Ovo'
            >
                My Latest Work
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.7 }} 
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            >
                I am a passionate and skilled Full Stack Developer specializing in building dynamic, scalable, and user-friendly web applications.
            </motion.p>
            
            {/* Category Buttons */}
            <div className='md:flex justify-center gap-4 mb-10 overflow-x-auto md:overflow-visible scrollbar-hide'>
                <div className='flex gap-4 w-max md:w-auto mx-4 md:mx-0 pb-2 md:pb-0'>
                    {categories.map((category) => (
                        <button 
                            key={category} 
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full border text-sm transition duration-300 whitespace-nowrap ${
                                selectedCategory === category 
                                    ? 'bg-black text-white' 
                                    : 'border-gray-400 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Coming Soon Animation */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={selectedCategory}
                    className='flex items-center justify-center h-[400px]'
                >
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className='text-center'
                    >
                        <h3 className='text-4xl md:text-6xl font-Ovo font-bold text-gray-800 dark:text-white'>
                            Coming Soon
                        </h3>
                        <p className='text-lg md:text-xl mt-4 text-gray-600 dark:text-gray-300 font-Ovo'>
                            A Turing design is in development to showcase {selectedCategory} projects
                        </p>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default Work;