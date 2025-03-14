import { useState } from 'react';
import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

const categories = ['All', 'Mobile', 'Website', 'Full Stack', 'SEO', 'AI'];

const Work = ({ isDarkMode }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All' 
        ? workData 
        : workData.filter(project => project.category === selectedCategory);

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id='work' className='w-full px-[5%] md:px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-3xl md:text-5xl font-Ovo'>My Latest Work</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-center max-w-2xl mx-auto mt-5 mb-8 md:mb-12 font-Ovo'>I am a passionate and skilled Full Stack Developer specializing in building dynamic, scalable, and user-friendly web applications.</motion.p>
            
            {/* Scrollable Category Buttons */}
            <div className='overflow-x-auto pb-3 scrollbar-hide mb-8 md:mb-10'>
                <div className='flex gap-3 w-max px-4 md:px-0 mx-auto'>
                    {categories.map((category) => (
                        <button 
                            key={category} 
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full border text-sm min-w-max transition duration-300 ${
                                selectedCategory === category 
                                    ? 'bg-black text-white border-black' 
                                    : 'border-gray-300 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={selectedCategory}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8 md:my-10 gap-4 md:gap-5'
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div 
                            whileHover={{ scale: 1.03 }} 
                            transition={{ duration: 0.3 }} 
                            key={index} 
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group overflow-hidden shadow-lg'
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        >
                            <div className='absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300' />
                            
                            {/* Tech Stack Icons */}
                            <div className='absolute top-3 left-3 flex gap-2'>
                                {project.tech.map((tech, i) => (
                                    <div 
                                        key={i}
                                        className='bg-white/90 p-1 rounded-md backdrop-blur-sm flex items-center shadow-sm hover:scale-105 transition-transform'
                                    >
                                        <Image 
                                            src={tech} 
                                            alt='tech' 
                                            width={24}
                                            height={24}
                                            className='w-5 h-5 md:w-6 md:h-6 object-contain'
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className='bg-white/95 backdrop-blur-sm w-11/12 rounded-lg absolute bottom-3 left-1/2 -translate-x-1/2 py-3 px-4 transition-all duration-500 group-hover:bottom-4 shadow-md'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h2 className='font-semibold text-lg md:text-xl'>{project.title}</h2>
                                        <p className='text-sm text-gray-600 mt-1'>{project.description}</p>
                                    </div>
                                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-lime-300 transition-colors ml-3'>
                                        <Image 
                                            src={assets.send_icon} 
                                            alt='send' 
                                            width={20}
                                            height={20}
                                            className='w-5'
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default Work;