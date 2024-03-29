import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import CloseIcon from "./close-icon";
import HamburgerIcon from "./hamburger-icon";

const mobileLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

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

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="relative z-10">
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={clsx("absolute menu md:hidden mt-[-15px] ml-[-10px] top-0 left-0 flex items-start justify-start z-20",
        isOpen ? "bg-pink-50 rounded-lg shadow-lg dark:shadow-sm dark:shadow-rose-50 dark:bg-zinc-800 dark:border-white" : ''
        )}
      >
        <motion.button
          className="absolute top-4 left-4"
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
          className="mt-16 ml-5 mr-5"
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
          {mobileLinks.map((link, index ) => 
            <motion.li variants={itemVariants} key={index}>
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx("block p-2 text-xl text-slate-500 hover:text-slate-950 hover:line-through dark:hover:text-white", {
                    "text-slate-950 font-black dark:text-white" : pathname === link.href
                   })}
              >
                {link.name}
              </Link>
            </motion.li>
          )}
        </motion.ul>
      </motion.nav>
    </div>
  )
}