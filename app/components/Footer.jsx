import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <div className="inline-block p-2 rounded-xl mb-4 transition-all duration-300 hover:shadow-lg dark:hover:shadow-white/10">
          <Image 
            src={isDarkMode ? assets.logo_dark : assets.logo} 
            alt='Logo' 
            className='w-24 md:w-28 mx-auto' 
          />
        </div>
      
        <div className='flex items-center w-max gap-2 mx-auto text-gray-600 dark:text-gray-400 font-Ovo'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-5' /> 
          fotsoeddysteve@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400/30 mx-[10%] mt-12 py-6'>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Fotso Eddy Steve. All rights reserved.
        </p>
        
        <ul className='flex items-center gap-8 justify-center mt-6 sm:mt-0'>
          <li>
            <a 
              target='_blank' 
              rel="noopener noreferrer"
              href="https://github.com/fotsoeddy"
              className="group flex items-center gap-1.5 transition-all duration-300 hover:text-purple-500"
            >
              <Image src={isDarkMode ? assets.github_color : assets.github_icon_black} alt="Github" width={20} height={20} className="transition-transform group-hover:scale-110" />
              <span className="text-sm hidden md:inline">Github</span>
            </a>
          </li>
          <li>
            <a 
              target='_blank' 
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/fotso-eddy-453a20256/"
              className="group flex items-center gap-1.5 transition-all duration-300 hover:text-blue-500"
            >
              <Image src={isDarkMode ? assets.linkedin_icon : assets.linkedin_icon_black} alt="LinkedIn" width={20} height={20} className="transition-transform group-hover:scale-110" />
              <span className="text-sm hidden md:inline">LinkedIn</span>
            </a>
          </li>
          <li>
            <a 
              target='_blank' 
              rel="noopener noreferrer"
              href="https://x.com/fotsoeddysteve"
              className="group flex items-center gap-1.5 transition-all duration-300 hover:text-blue-400"
            >
              <Image src={isDarkMode ? assets.x_icon : assets.x_icon_black} alt="X" width={18} height={18} className="transition-transform group-hover:scale-110" />
              <span className="text-sm hidden md:inline">X</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
