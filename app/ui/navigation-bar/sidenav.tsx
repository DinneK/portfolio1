'use client'
import NavLinks from "./desk-top-navigation/nav-links";
import MobileMenu from "./mobile-navigation/mobile-menu";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MoonMorph from "../moon-to-sun/moon-morph";
import SunMorph from "../sun-to-moon/sun-morph";
import { setPathIndex } from "../svg-morphing/svg-morph";


export default function SideNav() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [pathIndex, setPathIndexState] = useState(0);

  useEffect(() => {
    const applyThemes = () => {
      if(isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }

    applyThemes()
  }, [isDarkMode])

  const toggleDarkMode = () => {
    if(isDarkMode) {
      localStorage.theme = 'light'
    } else {
      localStorage.theme = 'dark'
    }

    setIsDarkMode(!isDarkMode)
    setPathIndex(0, setPathIndexState)
  }

  const sidebarClasses = clsx(
    'flex md:flex-col justify-between md:items-start px-3 py-4 md:px-2 md:bg-light md:dark:bg-dark sp-pink dark:bg-black',
  );

  return (
    <div className={sidebarClasses}>
      <NavLinks />
      <MobileMenu />
      <motion.button
        onClick={toggleDarkMode}
        className="curser-pointer mt-4 flex md:justify-center"
      >
         {isDarkMode ?
         <SunMorph />
         : 
         <MoonMorph />
      }
      </motion.button>
    </div>
  )
}