'use client'

// import { usePathname } from "next/navigation";
import NavLinks from "./nav-links";
import MobileMenu from "./mobile-menu";
import clsx from "clsx";
import { useState, useEffect } from "react";
// import  IconMoon  from "../../../public/dark-mode/dark-mode.svg"
import MoonMorph from "../moon-to-sun/moon-morph";
import SunMorph from "../sun-to-moon/sun-morph";


export default function SideNav() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  // const path = usePathname()

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
      // document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      // document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }

    setIsDarkMode(!isDarkMode)
  }

  const sidebarClasses = clsx(
    'flex md:flex-col justify-between px-3 py-4 md:px-2 md:bg-light md:dark:bg-dark sp-pink dark:bg-black',
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
         <SunMorph />
        // <img src="dark-mode/dark-mode.svg" alt="Moon icon" width={40} height={40} className="dark:invert"/>
         : 
         <MoonMorph />
        // <img src="dark-mode/light-mode.svg" alt="Moon icon" width={40} height={40} className="dark:invert"/>
      }
      </div>
    </div>
  )
}