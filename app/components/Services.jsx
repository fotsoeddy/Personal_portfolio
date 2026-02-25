import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const Services = () => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

       <motion.h4 
              initial={{ opacity: 0,y:-20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 0.5, delay:0.3}}
       className='text-center mb-2 text-lg font-Ovo'>What i Offer</motion.h4>
       <motion.h2
              initial={{ opacity: 0,y:-20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 0.5, delay:0.3}}
        className='text-center  text-5xl font-Ovo'>My Services</motion.h2>
       <motion.p 
             initial={{ opacity: 0}}
             whileInView={{opacity:1}}
             transition={{duration: 0.5, delay:0.7}}
       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-base'>From building full-stack web apps to deploying and securing them on the cloud — I cover the full engineering lifecycle.</motion.p>

       <motion.div 
             initial={{ opacity: 0}}
             whileInView={{opacity:1}}
             transition={{duration: 0.6, delay:0.9}}  
       className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 my-10'>

        {serviceData.map(({icon, title, description, link},index)=>(
            <motion.div 
            whileHover={{scale:1.05}}
            key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'> 
                <Image src={icon} alt=' ' className='w-10' />
                <motion.h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</motion.h3>
                <motion.p className='text-sm text-gray-700 leading-5 dark:text-white'> {description} </motion.p>
            </motion.div>
        ))}

       </motion.div>
    </motion.div>
  )
}

export default Services
