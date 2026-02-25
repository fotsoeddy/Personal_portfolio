import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '@/assets/assets'

const Navbar = ({isDarkMode,setIsDarkMode}) => {
    const[isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () =>{
        sideMenuRef.current.style.transform = 'translate(-16rem)' 
    }
    const closeMenu = () =>{
        sideMenuRef.current.style.transform = 'translate(16rem)' 
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden' >
        <Image src={assets.header_bg_color } alt='' className='w-full ' />
    </div>

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
  <Link href="/#top">
    {/* Logo removed as requested */}
  </Link>
  <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? " " : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent" } `}>
    <li>
      <Link className='font-Ovo' href="/#top">Home</Link>
    </li>
    <li>
      <Link className='font-Ovo' href="/#about">About Me</Link>
    </li>
    <li>
      <Link className='font-Ovo' href="/#services">Services</Link>
    </li>
    <li>
      <Link className='font-Ovo' href="/projects">My work</Link>
    </li>
    <li>
      <Link className='font-Ovo' href="/#contact">Contact Me</Link>
    </li>
  </ul>
  <div className='flex gap-4 items-center'> 
    <button onClick={()=> setIsDarkMode(prev => !prev)} className='cursor-pointer'>
      <Image src={isDarkMode ? assets.sun_icon: assets.moon_icon} alt='' className='w-6' />
    </button>
    <Link href="/#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
      Contact <Image src={ isDarkMode ?  assets.arrow_icon_dark: assets.arrow_icon} className='w-3' alt=''/>
    </Link>
    <button className='block md:hidden ml-3' onClick={openMenu}>
      <Image src={ isDarkMode ? assets.menu_white :assets.menu_black} alt='' className='w-6' />
    </button>
  </div>
  {/* Mobile menu */}
  <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 buttom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
    <div className='absolute right-6 top-6' onClick={closeMenu}>
      <Image src={isDarkMode ? assets.close_white:assets.close_black} alt=' ' className='w-5 cursor-pointer' />
    </div>
    <li>
      <Link className='font-Ovo' onClick={closeMenu} href="/#top">Home</Link>
    </li>
    <li>
      <Link className='font-Ovo' onClick={closeMenu} href="/#about">About Me</Link>
    </li>
    <li>
      <Link className='font-Ovo' onClick={closeMenu} href="/#services">Services</Link>
    </li>
    <li>
      <Link className='font-Ovo' onClick={closeMenu} href="/projects">My work</Link>
    </li>
    <li>
      <Link className='font-Ovo' onClick={closeMenu} href="/#contact">Contact Me</Link>
    </li>
  </ul>
</nav>

    </>
  )
}

export default Navbar
