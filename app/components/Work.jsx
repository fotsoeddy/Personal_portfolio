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
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-Ovo'>My Latest Work</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I am a passionate and skilled Full Stack Developer specializing in building dynamic, scalable, and user-friendly web applications.</motion.p>
            
            {/* Scrollable Category Buttons (Mobile only) */}
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
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5 dark:text-black'
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            transition={{ duration: 0.3 }} 
                            key={index} 
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        >
                            {/* Tech Skills Badges */}
                            <div className='absolute top-3 left-3 flex gap-2'>
                                {project.tech.map((tech, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className='bg-white p-1 rounded-md shadow-sm'
                                    >
                                        <Image 
                                            src={tech} 
                                            alt='tech' 
                                            width={24}
                                            height={24}
                                            className='w-6 h-6 object-contain'
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300'>
                                    <Image src={assets.send_icon} alt='send' className='w-5' />
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