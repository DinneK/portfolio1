'use client'

import { usePathname } from "next/navigation";
import NavLinks from "./nav-links";
import MobileMenu from "./mobile-menu";
import clsx from "clsx";
import { useState, useEffect } from "react";
import SunIcon from '../../../public/dark-mode/light-mode.svg'
import MoonIcon from '../../../public/dark-mode/dark-mode.svg'
import Image from "next/image";

export default function SideNav() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const path = usePathname()
  //holder logic, needs to be refactered
  // const isLightPage = (path === '/' || path === '/about' || path === '/projects' || path === '/contact');

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  const toggleDarkMode = () => {
    if(isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }

    setIsDarkMode(!isDarkMode)
  }

  const sidebarClasses = clsx(
    'flex md:flex-col justify-between px-3 py-4 md:px-2 md:bg-light md:dark:bg-dark sp-pink dark:bg-black',
    {
      // 'bg-light': isLightPage,
      // 'text-white bg-dark': !isLightPage, 
    },
    //  'h-screen'
  );

  return (
    <div className={sidebarClasses}>
      <NavLinks />
      <MobileMenu />
      <div
        onClick={toggleDarkMode}
        className="curser-pointer mt-4 flex md:justify-center"
      >
         {isDarkMode ?
        <img src="dark-mode/dark-mode.svg" alt="Moon icon" width={40} height={40} className="dark:invert"/>
         : 
        <img src="dark-mode/light-mode.svg" alt="Moon icon" width={40} height={40} className="dark:invert"/>}
      </div>
    </div>
  )
}