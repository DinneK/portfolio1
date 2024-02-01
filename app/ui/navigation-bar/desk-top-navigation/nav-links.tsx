'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'
import { motion, Variants } from 'framer-motion';
import MobileMenu from '../mobile-navigation/mobile-menu';
import CloseIcon from '../mobile-navigation/close-icon';
import HamburgerIcon from '../mobile-navigation/hamburger-icon';

const links = [
  { name: 'Home', href: '/'},
  { name: 'Projects', href: '/projects'},
  { name: 'About', href: '/about'},
  { name: 'Contact', href: '/contact'}
];

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 }
  }
}

export default function NavLinks() {
  const [isOpen, setIsOpen] =useState(false)
  const pathname = usePathname()

  return (
    <div className='hidden md:flex md:flex-col dark:text-white'>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <CloseIcon />
          ) : (
            <HamburgerIcon />
          )}
        </motion.button>
        <motion.ul
          className="mt-16 ml-6 md:mt-2 md:ml-[-25px] md:min-h-80 md:flex md:flex-col md:justify-evenly"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
        {links.map((link, index) => 
          <motion.li variants={itemVariants} key={index}>
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={clsx("flex items-center justify-center p-3 text-xl text-slate-400 transform -rotate-90 font-medium hover:line-through hover:text-gray-950 dark:hover:text-white",
              {
                'no-underline font-black dark:text-white md:text-black': pathname === link.href,
              }
            )}
            >
              {link.name}
            </Link>
          </motion.li>
        )}
        </motion.ul>
      </motion.nav>
  
      <MobileMenu />
    </div>
  )
}